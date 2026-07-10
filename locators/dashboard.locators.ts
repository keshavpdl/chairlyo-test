import {Page, Locator} from '@playwright/test';

export default class DashboardLocators{
    dashboardText: Locator;

    constructor(page:Page){
        this.dashboardText= page.getByRole('heading', { name: 'Dashboard' });
    }

}
