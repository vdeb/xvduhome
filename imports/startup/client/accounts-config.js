import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});