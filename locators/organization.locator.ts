import {Page, Locator} from '@playwright/test';

export default class OrganizationLocators{
    organizationText: Locator;

    constructor(page:Page){
        this.organizationText= page.getByRole('heading', { name: 'Organization' });
    }
}