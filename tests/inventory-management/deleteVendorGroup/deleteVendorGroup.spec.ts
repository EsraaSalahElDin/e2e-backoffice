import {test,expect} from '@playwright/test'
import { deleteVendorGroup} from './deleteVendorGroup.page';

test.describe('All cases for Delete Vendor Group',() => {
test("Delete Vendor Group",async ({page}) => { 
    const newVG=new deleteVendorGroup(page);
    await newVG.Navigate_To_CreateVG('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
    await newVG.deleteVG('EsraaVGEn1694336591541');
    await expect(page.locator('[class="k-grid-norecords"]')).toBeEmpty;

});

test("Cancel Delete Vendor Group",async ({page}) => { 
    const newVG=new deleteVendorGroup(page);
    await newVG.Navigate_To_CreateVG('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
    await newVG.CanceldeleterequestVG('EsraaVGEn1694337086742');
    await expect(page.locator('[class="k-grid-norecords"]')).toBeEmpty;

});
test("Colse Deleter Request Vendor Group",async ({page}) => { 
    const newVG=new deleteVendorGroup(page);
    await newVG.Navigate_To_CreateVG('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
    await newVG.ColsedeleterequestVG('EsraaVGEn1694337086742');
    await expect(page.locator('[class="k-grid-norecords"]')).toBeEmpty;

});
});