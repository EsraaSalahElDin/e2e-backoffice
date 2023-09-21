import { test, expect ,page} from '@playwright/test';
test.use({
  viewport: {
    width:1920,
    height:1080
  }
});
let count=Date.now().toString();
test.describe('All cases for vendor group',() => {
test('Create Vendor Group', async ({ page }) => {
  
  
  //invegation to supply chain module
  //Create Vendor group
  await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
  await page.locator('[class="k-button k-button-icontext k-grid-add d-inline-block"]').click();
  await page.locator('[class="only-left-text form-control"]').click();
  await page.locator('[class="only-left-text form-control"]').fill('EsraaVGEn'+count);
  await page.locator('[class="only-right-text form-control"]').click();
  await page.locator('[class="only-right-text form-control"]').fill('EsraaVGAr'+count);
  await page.getByText('Select Classification').click();
  await page.getByText('MedicalConsumable').click();
  await page.locator('[placeholder="Add Vendor Group Prefix"]').click();
  await page.locator('[placeholder="Add Vendor Group Prefix"]').fill('EsraaPrefix'+count);
  await page.locator('[class="k-button mx-2 save-button"]').click();
  await expect (page.getByText('EsraaVGEn'+count)).toBeVisible();
  
    });
    
  test('Edit Vendor Group', async ({ page }) => {
 
  await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
  await page.locator('[data-text-field="EnName"]').click();
  await page.locator('[data-text-field="EnName"]').fill('EsraaVGEn'+count);
  await page.locator('[data-text-field="EnName"]').press('Enter');
  await page.getByRole('button', { name: 'Edit' }).first().click();
  await page.locator('[class="only-left-text form-control"]').click();
  await page.locator('[class="only-left-text form-control"]').fill('EsraaVGEn'+(count+1));
  await page.locator('[class="only-right-text form-control"]').click();
  await page.locator('[class="only-right-text form-control"]').fill('EsraaVGAr'+(count+1));
  // await page.getByText('Select Classification').click();
  // await page.getByText('MedicalConsumable', { exact: true }).click();
  await page.locator('[placeholder="Add Vendor Group Prefix"]').click();
  await page.locator('[placeholder="Add Vendor Group Prefix"]').fill('EsraaPrefix'+(count+1));
  await page.locator('[class="k-button mx-2 save-button"]').click();
  await expect (page.getByText('EsraaVGEn'+(count+1))).toBeVisible();
   
 });

 test('Delete Vendor Group', async ({ page }) => {

  //invegation to supply chain module
  //Create Vendor group
  await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
  await page.locator('[data-text-field="EnName"]').click();
  await page.locator('[data-text-field="EnName"]').fill('EsraaVGEn'+count);
  await page.locator('[data-text-field="EnName"]').press('Enter');
  await page.getByRole('button', { name: 'Delete' }).first().click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await expect(page.locator('[class="k-grid-norecords"]')).toBeEmpty;
  

 });
});


//--=======================================================

