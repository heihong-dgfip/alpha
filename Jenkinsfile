pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS_14', configId: 'npmrc-ice-registry-nexus') {
                    sh("npm install -g yarn")
                    sh("yarn")
                }
            }
        }
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS_14' ,configId: 'npmrc-ice-registry-nexus') {
                    sh("yarn build")
                }
            }
        }
        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS_14' ,configId: 'npmrc-ice-registry-nexus') {
                    sh("yarn test")
                }
            }
        }
        stage('Release') {
            when {
              expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
            }
            environment {
                GL_TOKEN  = credentials('jenkins-gitlab-dsfr-token')
                NPM_CONFIG_REGISTRY = 'http://nexus-cloud.appli.dgfip/repository/npmjs_dgfip/'
                NPM_EMAIL = 'dtnum.ux.accessibilite@dgfip.finances.gouv.fr'
            }
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS_14' ,configId: 'npmrc-ice-registry-nexus') {
                    configFileProvider([configFile(fileId: 'org.jenkinsci.plugins.configfiles.xml.XmlConfig1339662149088', replaceTokens: true, variable: 'MAVEN_SETTINGS_SECURITY')]) {
                        withMaven(maven: 'Maven 3.5.4', mavenSettingsConfig: 'org.jenkinsci.plugins.configfiles.maven.MavenSettingsConfig1337760607340') {
                            withCredentials(bindings:  [usernamePassword(credentialsId: 'jenkins-venezia-dsfr-username-password', usernameVariable: 'NPM_USERNAME', passwordVariable: 'NPM_PASSWORD')]) {
                                sh("npx multi-semantic-release")
                            }
                        }
                    }
                }
            }
        }
        stage('Site') {
            when {
              expression { currentBuild.result == null || currentBuild.result == 'SUCCESS' }
              anyOf {
                  branch 'alpha'
                  branch 'beta'
                  branch 'master'
              }
            }
            steps {
                withCredentials(bindings: [sshUserPrivateKey(credentialsId: 'jenkins-ssh-key-for-dsfr-venezia', keyFileVariable: 'SSH_KEY_FOR_DSFR_VENEZIA', passphraseVariable: '', usernameVariable: 'USER_FOR_DSFR_VENEZIA')]) {
                    sh("scp -r -i $SSH_KEY_FOR_DSFR_VENEZIA -P 9222 packages/core/storybook-static/* ux-access-robot@venezia.appli.dgfip:/data/var/lib/fusionforge/chroot/home/groups/dsfr/htdocs/$BRANCH_NAME/core")
                    sh("scp -r -i $SSH_KEY_FOR_DSFR_VENEZIA -P 9222 packages/vue/dist/* ux-access-robot@venezia.appli.dgfip:/data/var/lib/fusionforge/chroot/home/groups/dsfr/htdocs/$BRANCH_NAME/vue")
                }
            }
        }
    }
}
