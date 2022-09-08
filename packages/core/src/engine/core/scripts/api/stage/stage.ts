// @ts-nocheck
import state from '../state';
import { Element } from './element';
import { Module } from '../module';
import { Root } from './root';
import inspector from '../inspect/inspector';

class Stage extends Module {
  constructor () {
    super('stage');
    this.root = new Root();
    super.add(this.root);
    this.observer = new MutationObserver(this.mutate.bind(this));
    this.modifications = [];
    this.willModify = false;
    this.modifying = this.modify.bind(this);

    this.customElements = [];
  }

  hasElement (node) {
    for (const element of this.collection) if (element.node === node) return true;
    return false;
  }

  getElement (node) {
    for (const element of this.collection) if (element.node === node) return element;
    const element = new Element(node);
    this.add(element);
    inspector.debug(`add element [${element.id}] ${element.html}`);
    return element;
  }

  getProxy (node) {
    if (!this.hasElement(node)) return null;
    const element = this.getElement(node);
    return element.proxy;
  }

  add (element) {
    super.add(element);
    this.put(element, this.root);
  }

  put (element, branch) {
    inspector.trace(`CE - search position of ${element.node.nodeName}#${element.node.id} into ${branch.node.nodeName}#${branch.node.id}`);

    const hostAncestors = node => {
      let ancestors = [];
      let hostAncestor = node;
      while (!!hostAncestor) {
        ancestors.push(hostAncestor);
        hostAncestor = hostAncestor.getRootNode().host;
      }
      return ancestors;
    }

    let index = 0;
    for (let i = branch.children.length - 1; i > -1; i--) {
      const child = branch.children[i];
      let position = element.node.compareDocumentPosition(child.node);

      // element and child are into two different doms
      if (position & Node.DOCUMENT_POSITION_DISCONNECTED) {
        // is child or its slots contains element host ancestor
        let elementHostAncestors = hostAncestors(element.node);
        if ([child.node, ...Array.from(child.node.querySelectorAll('slot')).flatMap(slot => slot.assignedElements())].some(node => elementHostAncestors.some(elementHostAncestor => node.contains(elementHostAncestor)))) {
          inspector.trace(`CE - ${child.node.nodeName}#${child.node.id} constains ${element.node.nodeName}#${element.node.id} host ancestor`);
          position = Node.DOCUMENT_POSITION_CONTAINS;
        }
      }

      if (position & Node.DOCUMENT_POSITION_DISCONNECTED) {
        // is element or its slots contains child host ancestor
        let childHostAncestors = hostAncestors(child.node);
        if ([element.node, ...Array.from(element.node.querySelectorAll('slot')).flatMap(slot => slot.assignedElements())].some(node => childHostAncestors.some(childHostAncestor => node.contains(childHostAncestor)))) {
          inspector.trace(`CE - ${element.node.nodeName}#${element.node.id} constains ${child.node.nodeName}#${child.node.id} host ancestor`);
          position = Node.DOCUMENT_POSITION_CONTAINS;
        }
      }

      if (position & Node.DOCUMENT_POSITION_DISCONNECTED) {
        // sibling elements
        let childHostAncestor = child.node;
        let childHostDescendant;
        let elementHostAncestor = element.node;
        let elementHostDescendant;

        // search common root node
        while (childHostAncestor.getRootNode() !== elementHostAncestor.getRootNode()) {
          if (!!elementHostAncestor.getRootNode().host) {
            elementHostDescendant = elementHostAncestor;
            elementHostAncestor = elementHostDescendant.getRootNode().host;
          } else {
            elementHostAncestor = element.node;
            elementHostDescendant = null;

            childHostDescendant = childHostAncestor;
            childHostAncestor = childHostDescendant.getRootNode().host;
          }
        }

        position = elementHostAncestor.compareDocumentPosition(childHostAncestor);

        if (position & Node.DOCUMENT_POSITION_CONTAINS) {
          inspector.trace(`CE - ${child.node.nodeName}#${child.node.id} host ancestor constains ${element.node.nodeName}#${element.node.id} host ancestor`);
          position = Node.DOCUMENT_POSITION_DISCONNECTED;
          // search slot that contains element
          const slot = Array.from(childHostAncestor.shadowRoot.querySelectorAll('slot')).find(slot => slot.assignedElements().some(node => node.contains(elementHostAncestor)));
          if (!!slot) {
            // compare child and slot position
            position = slot.compareDocumentPosition(childHostDescendant);
          }
        } else if (position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
          inspector.trace(`CE - ${element.node.nodeName}#${element.node.id} host ancestor constains ${child.node.nodeName}#${child.node.id} host ancestor`);
          position = Node.DOCUMENT_POSITION_DISCONNECTED;
          // search slot that contains child
          const slot = Array.from(elementHostAncestor.shadowRoot.querySelectorAll('slot')).find(slot => slot.assignedElements().some(node => node.contains(childHostAncestor)));
          if (!!slot) {
            // compare element and slot position
            position = elementHostDescendant.compareDocumentPosition(slot);
          }
        } else if (!(position & Node.DOCUMENT_POSITION_DISCONNECTED)) {
          // special case : elementHostAncestor and childHostAncestor are direct children of a custom element, and are reflected into different slots into custom element
          if (elementHostAncestor.parentNode === childHostAncestor.parentNode && !!elementHostAncestor.parentNode.shadowRoot) {
            const parentSlots = Array.from(elementHostAncestor.parentNode.shadowRoot.querySelectorAll('slot'));
            const elementSlot = parentSlots.find(slot => slot.assignedElements().some(node => node.contains(elementHostAncestor)));
            const childSlot = parentSlots.find(slot => slot.assignedElements().some(node => node.contains(childHostAncestor)));
            if (!!elementSlot && !!childSlot && elementSlot !== childSlot) {
              inspector.trace(`CE - ${element.node.nodeName}#${element.node.id} host ancestor and ${child.node.nodeName}#${child.node.id} host ancestor have same parent, and are reflected in it into different slots`);
              position = elementSlot.compareDocumentPosition(childSlot);
            }
          }
        }
      }

      if (position & Node.DOCUMENT_POSITION_DISCONNECTED) {
        inspector.trace(`CE - position : undeterminate`);
      }
      else if (position & Node.DOCUMENT_POSITION_CONTAINS) {
        inspector.trace(`CE - position : ${child.node.nodeName}#${child.node.id} contains ${element.node.nodeName}#${element.node.id}`);
        this.put(element, child);
        return;
      } else if (position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        inspector.trace(`CE - position : ${child.node.nodeName}#${child.node.id} contained by ${element.node.nodeName}#${element.node.id}`);
        branch.removeChild(child);
        element.addChild(child, 0);
      } else if (position & Node.DOCUMENT_POSITION_PRECEDING) {
        inspector.trace(`CE - position : ${child.node.nodeName}#${child.node.id} preceding ${element.node.nodeName}#${element.node.id}`);
        index = i + 1;
        break;
      } else if (position & Node.DOCUMENT_POSITION_FOLLOWING) {
        inspector.trace(`CE - position : ${child.node.nodeName}#${child.node.id} following ${element.node.nodeName}#${element.node.id}`);
      }
    }

    branch.addChild(element, index);
  }

  activate () {
    this.observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true });

    for (const customElement of this.customElements) customElement.observer.observe(customElement.shadowRoot, { childList: true, subtree: true, attributes: true });
  }

  deactivate () {
    this.observer.disconnect();
    for (const customElement of this.customElements) customElement.observer.disconnect();
  }

  mutate (mutations) {
    const examinations = [];
    mutations.forEach((mutation) => {
      switch (mutation.type) {
        case 'childList':
          mutation.removedNodes.forEach((node) => this.dispose(node));
          mutation.addedNodes.forEach((node) => this.parse(node));
          break;

        case 'attributes':
          if (this.hasElement(mutation.target)) {
            const element = this.getElement(mutation.target);
            element.prepare(mutation.attributeName);
            if (examinations.indexOf(element) === -1) examinations.push(element);
            for (const descendant of element.descendants) if (examinations.indexOf(descendant) === -1) examinations.push(descendant);
          }
          if (this.modifications.indexOf(mutation.target) === -1) this.modifications.push(mutation.target);
          break;
      }
    });

    examinations.forEach(element => element.examine());
    if (this.modifications.length && !this.willModify) {
      this.willModify = true;
      window.requestAnimationFrame(this.modifying);
    }
  }

  modify () {
    this.willModify = false;
    const targets = this.modifications.slice();
    this.modifications.length = 0;
    for (const target of targets) this.parse(target);
  }

  dispose (node) {
    const disposables = [];
    this.forEach((element) => {
      if (node.contains(element.node)) disposables.push(element);
    });

    for (const disposable of disposables) {
      disposable.dispose();
      this.remove(disposable);
    }
  }

  parse (node, registration, nonRecursive) {
    if (!!registration) {
      this.parseRegistration(registration);
    } else {
      this.parseNode(node, nonRecursive);
    }
  }

  parseRegistration(registration) {
    const creations = [];

    let nodes = registration.parse(document.documentElement);
    for (const customElement of this.customElements) nodes = [...nodes, ...registration.parse(customElement.shadowRoot)];

    for (const n of nodes) {
      const element = this.getElement(n);
      element.project(registration);
      if (creations.indexOf(element) === -1) creations.push(element);
    }

    for (const element of creations) element.populate();
  }

  parseNode (node, nonRecursive) {
    const creations = [];

    for (const registration of state.getModule('register').collection) {
      const nodes = registration.parse(node, nonRecursive);

      for (const n of nodes) {
        const element = this.getElement(n);
        element.project(registration);
        if (creations.indexOf(element) === -1) creations.push(element);
      }
    }

    for (const element of creations) element.populate();
  }

  connectCustomElement (node) {
    let customElement = this.customElements.find(ce => ce.host === node);
    if (customElement === undefined) {
      if (!node.shadowRoot) return;
      customElement = {
        host: node,
        shadowRoot: node.shadowRoot,
        observer: new MutationObserver(this.mutate.bind(this))
      };
    }

    inspector.debug(`CE- connect ${node.nodeName}`);
    this.customElements.push(customElement);
    
    if (state.isActive) {
      this.parseNode(customElement.shadowRoot);
      customElement.observer.observe(customElement.shadowRoot, { childList: true, subtree: true, attributes: true });
    }
  }

  disconnectCustomElement (node) {
    let customElement = this.customElements.find(ce => ce.host === node);
    if (customElement === undefined) return;

    inspector.debug(`CE - disconnect ${node.nodeName}`);
    if (state.isActive) {
      customElement.observer.disconnect();
      this.dispose(customElement.shadowRoot);
    }
  }
}

export { Stage };
