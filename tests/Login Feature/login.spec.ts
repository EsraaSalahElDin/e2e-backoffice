import {test,expect} from '@playwright/test'
import { loginpage } from './login.page';

test("valid login",async ({page}) => {
const Login=new loginpage(page);
await Login.Navigate_To_Login('http://backoffice-systemtest.andalusiagroup.net:8090/');
await Login.perform_login('Esraa-Admin','ESml123');
await page.waitForURL(/.*dashboard/);
await expect(page).toHaveURL(/.*dashboard/);
await page.context().storageState({path:'./Auth.json'});


    
});