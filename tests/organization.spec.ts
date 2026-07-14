import { expect, test } from '../fixtures/fixtures';
import LoginPage from '../pages/LoginPage';
import OrganizationPage from '../pages/OrganizationPage';
import DashboardPage from '../pages/DashboardPage';
test.describe('Login', () => {
    let loginPage: LoginPage;
    let organizationPage: OrganizationPage;
    let dashboardPage: DashboardPage;

    test.beforeEach('Navigate to Chairlyo Login Page', async ({ baseUrl, page, email, password }) => {
        loginPage = new LoginPage(page);
        organizationPage = new OrganizationPage(page);
        dashboardPage = new DashboardPage(page);
        await loginPage.navigateToChairlyo(baseUrl);
        await loginPage.loginToChairlyo(email, password);
        await loginPage.verifyLoginSuccess();
        await loginPage.verifyDashboardText();
    });

    test.skip('Navigate to Organization Page', async () => {
        await dashboardPage.gotoOrganizationPage();
        await organizationPage.verifyOrganizationPage();
    });

    test('Add a new Organization', async ({ organizationData, page }) => {
        // test.slow()
        await dashboardPage.gotoOrganizationPage();
        await page.pause();
        await organizationPage.verifyOrganizationPage();

        await organizationPage.clickAddOrganizationButton();
        
                await organizationPage.verifyAddOrganizationForm();
                // await organizationPage.captureScreenshot();
                await organizationPage.addOrganization(organizationData);
                
                await organizationPage.verifyOrganizationCreated(organizationData.name);
                // Full page screenshot
                await page.screenshot({ path: 'screenshots/organizationtable.png', fullPage: true });
    });

});
