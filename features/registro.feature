Feature: Register into losestudiantes.co
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers


Scenario Outline: Wrong register

    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill register with <name>, <lastname>, <email>, <university>, <program> and <password>
    And I try to register
    Then I expect to see register <error>

    Examples:
      | name             | lastname | email                    |university               |program |password|error                        |
      | Jhonatan         |          | j.guzmand@uniandes.edu.co|Universidad de los Andes |        |        |  "Ingresa una contraseña"   |
      |                  |  Guzmán  | j.guzmand@uniandes.edu.co|Universidad de los Andes |        |        |  "Ingresa una contraseña"   |
      |                  |          | j.guzmand@uniandes.edu.co|Universidad de los Andes |        |        |  "Ingresa una contraseña"   |
      |                  |          | j.guzmand@uniandes.edu.co|                         |        |  asdf  |  "La contraseña debe ser al menos de 8 caracteres"   |
      | Jhonatan         |          | asdf@asdf                |                         |        |asdfasdf|  "Ingresa un correo valido" |


Scenario Outline: Good register

    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill a good register with <name>, <lastname>, <email>, <university>, <program> and <password>
    And I try to register
    Then I want to see a successful message <message>

    Examples:
      | name             | lastname | email                    |university               |program |password|message                        |
      | asdf             | asdfasd  | asdf@asdf6.com           |Universidad de los Andes |Arte    |asdfasdf|"Registro exitoso!"            |