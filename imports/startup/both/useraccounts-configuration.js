import { AccountsTemplates } from 'meteor/useraccounts:core';
t9n = require('meteor-accounts-t9n');
T9n = t9n.T9n;

T9n.map('fr'), require('meteor-accounts-t9n/build/fr');
T9n.setLanguage("fr");

/**
 * The useraccounts package must be configured for both client and server to work properly.
 * See the Guide for reference (https://github.com/meteor-useraccounts/core/blob/master/Guide.md)
 */


 var pwd = AccountsTemplates.removeField('password');
 AccountsTemplates.removeField('email');
 AccountsTemplates.addFields([
 {
  _id: "username",
  type: "text",
  displayName: "username",
  required: true,
  minLength: 5,
},
{
  _id: 'email',
  type: 'email',
  required: true,
  displayName: "email",
  re: /.+@(.+){2,}\.(.+){2,}/,
  errStr: 'Email invalide',
},
{
  _id: 'username_and_email',
  type: 'text',
  required: true,
  displayName: "Login",
  placeholder:"Login ou E-mail",
},
pwd,
{
  _id: 'position',
  type: 'select',
  displayName:'Poste',
  required : true,
  select: [
        {
        text: "Pilier",
        value: "pilier",
      }, {
        text: "Talonneur",
        value: "talonneur",
      }, {
        text: "Deuxième ligne",
        value: "deuxiemeLigne",
      }, {
        text: "Troisième ligne",
        value: "troisiemeLigne",
      },{
        text: "Demi de Mélée",
        value: "demiMelee",
      },{
        text: "Demi d'ouverture'",
        value: "demiOuverture",
      },{
        text: "Centre",
        value: "centre",
      },{
        text: "Ailier",
        value: "ailier",
      },{
        text: "Arrière",
        value: "arriere",
      },
    ],
}
]);


 AccountsTemplates.configure({
  showForgotPasswordLink: true,
  defaultTemplate: 'Auth_page',
  defaultLayout: 'SimpleLayout',
  defaultContentRegion: 'main',
  defaultLayoutRegions: {},
  texts : {
    title : {
      changePwd: "Changer mon mot de passe",
      enrollAccount: "Enroll Title",
      forgotPwd: "Je suis une tâche, j'ai oublié mon mot de passe",
      resetPwd: "Reset du mot de passe",
      signIn: "Se connecter",
      signUp: "S'inscrire",
      verifyEmail: "Vérification de l'email",
    },
    button: {
          changePwd: "Password Text",
          enrollAccount: "Enroll Text",
          forgotPwd: "Recevoir un nouveau mot de passe",
          resetPwd: "Réinitialiser mon mot de passe",
          signIn: "Se connecter",
          signUp: "S'inscrire",
        },
    info: {
            emailSent: "info.emailSent",
            emailVerified: "info.emailVerified",
            pwdChanged: "info.passwordChanged",
            pwdReset: "info.passwordReset",
            pwdSet: "info.passwordReset",
            signUpVerifyEmail: "Successful Registration! Please check your email and follow the instructions.",
            verificationEmailSent: "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.",
        },
    inputIcons: {
          isValidating: "fa fa-spinner fa-spin",
          hasSuccess: "fa fa-check",
          hasError: "fa fa-times",
      },
    errors: {
            accountsCreationDisabled: "Client side accounts creation is disabled!!!",
            cannotRemoveService: "Cannot remove the only active service!",
            captchaVerification: "Captcha verification failed!",
            loginForbidden: "error.accounts.Login forbidden",
            mustBeLoggedIn: "error.accounts.Must be logged in",
            pwdMismatch: "error.pwdsDontMatch",
            validationErrors: "Validation Errors",
            verifyEmailFirst: "Please verify your email first. Check the email and follow the link!",
        }
  },
});



 AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
});

 AccountsTemplates.configureRoute('signUp', {
  name: 'join',
  path: '/join',
});

 AccountsTemplates.configureRoute('forgotPwd');

 AccountsTemplates.configureRoute('resetPwd', {
  name: 'resetPwd',
  path: '/reset-password',
});