Feature: Miracle74 account management
  Scenario: Open account management page
    Given I open the Miracle74 site
    When I click on "Account"
    And I click on "Account Management"
    Then the URL contains "subtopic=accountmanagement"
