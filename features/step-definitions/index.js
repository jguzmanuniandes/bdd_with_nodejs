//Complete siguiendo las instrucciones del taller
var { Given } = require('cucumber');
var { When } = require('cucumber');
var { Then } = require('cucumber');
var { expect, should } = require('chai');

Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if ($('button=Cerrar').isDisplayed()) {
        $('button=Cerrar').click();
    }
});

When('I open the login screen', () => {
    $('button=Ingresar').waitForExist(5000);
    $('button=Ingresar').waitForDisplayed(5000);
    $('button=Ingresar').click();
});

When('I fill a wrong email and password', () => {
    var cajaLogIn = $('.cajaLogIn');

    var mailInput = cajaLogIn.$('input[name="correo"]');
    mailInput.click();
    mailInput.setValue('wrongemail@example.com');

    var passwordInput = cajaLogIn.$('input[name="password"]');
    passwordInput.click();
    passwordInput.setValue('123467891');
});

When('I try to login', () => {
    var cajaLogIn = $('.cajaLogIn');
    cajaLogIn.$('button=Ingresar').click();
});

Then('I expect to not be able to login', () => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
});

When(/^I fill with (.*) and (.*)$/, (email, password) => {
    var cajaLogIn = $('.cajaLogIn');

    var mailInput = cajaLogIn.$('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.$('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
});

When(/^I fill register with (.*), (.*), (.*), (.*), (.*) and (.*)$/, (name, lastname, email, university, program, password) => {
    var cajaSingUp = $('.cajaSignUp');

    var nameField = cajaSingUp.$('input[name="nombre"]');
    var lastnameField = cajaSingUp.$('input[name="apellido"]');
    var emailField = cajaSingUp.$('input[name="correo"]');
    var passwordField = cajaSingUp.$('input[name="password"]');
    var agreeField = cajaSingUp.$('input[name="acepta"]');

    nameField.setValue(name);
    lastnameField.setValue(lastname);
    emailField.setValue(email)
    passwordField.setValue(password)
    agreeField.click()
});

When(/^I fill a good register with (.*), (.*), (.*), (.*), (.*) and (.*)$/, (name, lastname, email, university, program, password) => {
    var cajaSingUp = $('.cajaSignUp');

    var nameField = cajaSingUp.$('input[name="nombre"]');
    var lastnameField = cajaSingUp.$('input[name="apellido"]');
    var emailField = cajaSingUp.$('input[name="correo"]');
    var universityField = cajaSingUp.$('select[name="idUniversidad"]');
    var programField = cajaSingUp.$('select[name="idPrograma"]');
    var passwordField = cajaSingUp.$('input[name="password"]');
    var agreeField = cajaSingUp.$('input[name="acepta"]');

    nameField.setValue(name)
    lastnameField.setValue(lastname)
    emailField.setValue(email)
    universityField.selectByVisibleText(university)
    programField.selectByVisibleText(program)
    passwordField.setValue(password)
    agreeField.click()
});

When('I try to register', () => {
    $('button=Registrarse').click();
});

Then('I expect to see register {string}', error => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
    var alertText = browser.$('.aviso.alert.alert-danger').getText();
    console.log(alertText)
    expect(alertText).to.include(error);
});

Then('I expect to see {string}', error => {
    $('.aviso.alert.alert-danger').waitForDisplayed(5000);
    var alertText = browser.$('.aviso.alert.alert-danger').getText();
    expect(alertText).to.include(error);
});

Then('I want to see a successful message {string}', message => {
    $('.sweet-alert').waitForExist(15000);
    var messageAlert = $('.sweet-alert').$('h2').getText();
    expect(messageAlert).to.include(message);
});

Then('I expect to see login page', () => {
    var cuentaImg = $('div[title="cuenta"]')
    expect(cuentaImg).to.exist
});