import { Given, When, Then } from '@cucumber/cucumber';
import type { CustomWorld } from '../support/world';

Given('texto do cenario', async function (this: CustomWorld) {
  if (!this.page) {
    throw new Error('Browser page was not initialized');
  }

  // Contexto inicial do cenario
});

When('texto do cenario', async function (this: CustomWorld) {
  if (!this.page) {
    throw new Error('Browser page was not initialized');
  }

  // Acao principal
});

Then('texto do cenario', async function (this: CustomWorld) {
  if (!this.page) {
    throw new Error('Browser page was not initialized');
  }

  // Verificacao/resultado esperado
});
