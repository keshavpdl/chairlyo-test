import { expect, Page } from '@playwright/test';
import BasePage from './BasePage';
import OrganizationLocators from '../locators/dashboard.locators';

export default class OrganizationPage extends BasePage{
    readonly organizationLocators: OrganizationLocators;
    constructor(page:Page){
        super(page);
        this.organizationLocators = new OrganizationLocators(page);
    }
    
    async verifyOrganizationPage(){
        await expect(this.page).toHaveURL('/organization');
    } 
}
