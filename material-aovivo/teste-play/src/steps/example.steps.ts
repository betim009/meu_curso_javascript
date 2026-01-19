import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import type { CustomWorld } from '../support/world';

Given('I open the Miracle74 site', async function (this: CustomWorld) {
  if (!this.page) {
    throw new Error('Browser page was not initialized');
  }

  await this.page.goto('https://miracle74.com/');
});

When('I click on {string}', async function (this: CustomWorld, linkName: string) {
  if (!this.page) {
    throw new Error('Browser page was not initialized');
  }

  if (linkName === 'Account') {
    const accountLabel = this.page.locator('#account_Label');
    await accountLabel.waitFor({ state: 'visible', timeout: 10000 });
    await accountLabel.hover({ timeout: 10000 });
    await accountLabel.click({ timeout: 10000 });
    return;
  }

  if (linkName === 'Account Management') {
    const submenu = this.page.locator('.SubmenuitemLabel', { hasText: linkName });
    await submenu.waitFor({ state: 'visible', timeout: 10000 });
    await submenu.scrollIntoViewIfNeeded();
    await submenu.click({ timeout: 10000 });
    return;
  }

  const link = this.page.getByRole('link', { name: linkName, exact: true });
  const button = this.page.getByRole('button', { name: linkName, exact: true });
  const target = link.or(button);

  await target.first().waitFor({ state: 'visible', timeout: 10000 });
  await target.first().scrollIntoViewIfNeeded();
  await target.first().hover({ timeout: 10000 });
  await target.first().click({ timeout: 10000 });
});

Then('the URL contains {string}', async function (this: CustomWorld, expected: string) {
  if (!this.page) {
    throw new Error('Browser page was not initialized');
  }

  await expect(this.page).toHaveURL(new RegExp(expected));
});
