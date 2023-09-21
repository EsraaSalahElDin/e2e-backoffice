import {test,expect} from '@playwright/test'
import { editVendorGroup} from './editVendorGroup.page';
test.describe('All cases for Edit Vendor Group',() => {
test("Edit Vendor Group",async ({page}) => { 
    const newVG=new editVendorGroup(page);
    await newVG.Navigate_To_CreateVG('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
    await newVG.editVG('EsraaVG123En','EsraaVG1234En','EsraaVG1234Ar','EsraaVGCodePrefixAr1');
    await expect (page.getByText('EsraaVG1234En')).toBeVisible();

});
});