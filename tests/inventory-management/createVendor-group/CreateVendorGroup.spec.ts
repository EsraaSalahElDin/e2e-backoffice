import {test,expect} from '@playwright/test'
import { CreateVendorGroup } from './CreateVendorGroup.page'; 
let count=Date.now().toString();
test.describe('All cases for Create Vendor Group',() => {
    
test("Create Vendor Group",async ({page}) => { 
    const newVG=new CreateVendorGroup(page);
    await newVG.Navigate_To_CreateVG('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
    await newVG.createVG('EsraaVEn'+count,'EsraaVGAr'+count,'EsraaVGCodePrefixAr'+count);
    await expect (page.getByText('EsraaVGEn'+count)).toBeVisible();
    

});
test("Reqired 'English Name' Vendor Group",async ({page}) => { 
    const newVG=new CreateVendorGroup(page);
    await newVG.Navigate_To_CreateVG('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
    await newVG.checkRequiredFiled('','EsraaVGAr'+count,'EsraaVGCodePrefixAr'+count);
    await expect (page.getByText('Required')).toBeVisible();


});

test("Reqired 'Arabic Name' Vendor Group",async ({page}) => { 
    const newVG=new CreateVendorGroup(page);
    await newVG.Navigate_To_CreateVG('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
    await newVG.checkRequiredFiled('EsraaVGEn'+count,'','EsraaVGCodePrefixAr'+count);
    await expect (page.getByText('Required')).toBeVisible();


});

test("Reqired Classification Vendor Group",async ({page}) => { 
    const newVG=new CreateVendorGroup(page);
    await newVG.Navigate_To_CreateVG('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
    await newVG.checkEmptyClassification('EsraaVGEn'+count,'EsraaVGAr'+count,'EsraaVGCodePrefixAr'+count);
    await expect (page.getByText('Required')).toBeVisible();


});

test("Reqired PrefixCode Vendor Group",async ({page}) => { 
    const newVG=new CreateVendorGroup(page);
    await newVG.Navigate_To_CreateVG('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
    await newVG.checkRequiredFiled('EsraaVGEn'+count,'EsraaVGAr'+count,'');
    await expect (page.getByText('Required')).toBeVisible();


});

test("Duplicate 'English Name' Vendor Group",async ({page}) => { 
    const newVG=new CreateVendorGroup(page);
    await newVG.Navigate_To_CreateVG('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
    await newVG.createVG('EsraaVG123En','EsraaVGAr'+count,'EsraaVGCodePrefixAr'+count);
    await expect (page.getByText('Duplicated')).toBeVisible();
       
});

test("Duplicate 'Arabic Name' Vendor Group",async ({page}) => { 
    const newVG=new CreateVendorGroup(page);
    await newVG.Navigate_To_CreateVG('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
    await newVG.createVG('EsraaVGEn'+count,'EsraaVG123Ar','EsraaVGCodePrefixAr'+count);
    await expect (page.getByText('Duplicated')).toBeVisible();
       
});

test("Duplicate 'PrefixCode' Vendor Group",async ({page}) => { 
    const newVG=new CreateVendorGroup(page);
    await newVG.Navigate_To_CreateVG('http://backoffice-systemtest.andalusiagroup.net:8090/supply-chain/purchase-management/setups/vendor-setup/vendor-group');
    await newVG.createVG('EsraaVGEn'+count,'EsraaVGAr'+count,'EsraaVGCodePrefixAr');
    await expect (page.getByText('Duplicated')).toBeVisible();
       
});



});