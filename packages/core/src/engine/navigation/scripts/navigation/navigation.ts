// @ts-nocheck
import api from '../../api';
import { NavigationSelectors } from './navigation-selectors';
import { NavigationMousePosition } from './navigation-mouse-position';

class Navigation extends api.core.CollapsesGroup {
  init () {
    super.init();
    this.clicked = false;
    this.out = false;
    this.listen('focusout', this.focusOut.bind(this));
    this.listen('mousedown', this.down.bind(this));
  }

  validate (member) {
    return member.element.node.matches(NavigationSelectors.COLLAPSE);
  }

  down (e) {
    if (!this.isBreakpoint(api.core.Breakpoints.LG) || this.index === -1) return;
    this.position = this.current.element.node.contains(e.target) ? NavigationMousePosition.INSIDE : NavigationMousePosition.OUTSIDE;
    this.request(this.getPosition.bind(this));
  }

  focusOut (e) {
    if (!this.isBreakpoint(api.core.Breakpoints.LG)) return;
    this.out = true;
    this.request(this.getPosition.bind(this));
  }

  getPosition () {
    if (this.out) {
      switch (this.position) {
        case NavigationMousePosition.OUTSIDE:
          this.index = -1;
          break;

        case NavigationMousePosition.INSIDE:
          if (this.current) this.current.focus();
          break;

        default:
          if (this.index > -1 && !this.current.hasFocus) this.index = -1;
      }
    }
    this.position = NavigationMousePosition.NONE;
    this.out = false;
  }

  get index () { return super.index; }

  set index (value) {
    if (value === -1 && this.current !== null && this.current.hasFocus) this.current.focus();
    super.index = value;
  }
}

export { Navigation };
