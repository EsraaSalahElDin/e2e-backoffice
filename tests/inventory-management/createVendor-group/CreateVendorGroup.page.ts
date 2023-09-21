import { Page,Locator } from "@playwright/test";
export class CreateVendorGroup{

    readonly page:Page;
    readonly newVGBtn:Locator;
    readonly vendorGroupEnName:Locator;
    readonly vendorGroupArName:Locator;
    readonly selectClassification:Locator;
    readonly Classification:Locator;
    readonly PrefixCode:Locator;
    readonly saveBtn:Locator;
    readonly requiredText:Locator;

    constructor(page:Page){
        this.page=page;
        this.newVGBtn=page.locator('[class="k-button k-button-icontext k-grid-add d-inline-block"]');
        this.vendorGroupEnName=page.locator('[class="only-left-text form-control"]');
        this.vendorGroupArName=page.locator('[class="only-right-text form-control"]');
        this.selectClassification=page.getByText('Select Classification');
        this.Classification=page.getByText('MedicalService')
        this.PrefixCode=page.locator('[placeholder="Add Vendor Group Prefix"]');
        this.saveBtn=page.locator('[class="k-button mx-2 save-button"]');
        this.requiredText=page.getByText('Required');
    }

    async  Navigate_To_CreateVG(url:string) {
        await this.page.goto(url);
        
    }
    async createVG(EnName:string,ArName:string,Prefix:string){
        await this.newVGBtn.click();
        await this.vendorGroupEnName.click();
        await this.vendorGroupEnName.fill(EnName);
        await this.vendorGroupArName.click();
        await this.vendorGroupArName.fill(ArName);
        await this.selectClassification.click();
        await this.Classification.click();
        await this.PrefixCode.click();
        await this.PrefixCode.fill(Prefix);
        await this.saveBtn.click();

    }
    //Check English and Arabic name and code prefix
    async checkRequiredFiled(EnName:string,ArName:string,Prefix:string){
        await this.newVGBtn.click();
        await this.vendorGroupEnName.click();
        await this.vendorGroupEnName.fill(EnName);
        await this.vendorGroupArName.click();
        await this.vendorGroupArName.fill(ArName);
        await this.selectClassification.click();
        await this.Classification.click();
        await this.PrefixCode.click();
        await this.PrefixCode.fill(Prefix);
        await this.saveBtn.click();
        await this.requiredText.isVisible(); 

    }

    // async checkRequiredFiledArName(EnName:string,ArName:string,Prefix:string){
    //     await this.newVGBtn.click();
    //     await this.vendorGroupEnName.click();
    //     await this.vendorGroupEnName.fill(EnName);
    //     await this.vendorGroupArName.click();
    //     await this.vendorGroupArName.fill('');
    //     await this.selectClassification.click();
    //     await this.Classification.click();
    //     await this.PrefixCode.click();
    //     await this.PrefixCode.fill(Prefix);
    //     await this.saveBtn.click();
    //     await this.requiredText.isVisible(); 

    // }

    async checkEmptyClassification(EnName:string,ArName:string,Prefix:string){
        await this.newVGBtn.click();
        await this.vendorGroupEnName.click();
        await this.vendorGroupEnName.fill(EnName);
        await this.vendorGroupArName.click();
        await this.vendorGroupArName.fill(ArName);
        // await this.selectClassification.click();
        // await this.Classification.click();
        await this.PrefixCode.click();
        await this.PrefixCode.fill(Prefix);
        await this.saveBtn.click();
        await this.requiredText.isVisible(); 

    }
    
    // async checkEmptyPrefixCode(EnName:string,ArName:string,Prefix:string){
    //     await this.newVGBtn.click();
    //     await this.vendorGroupEnName.click();
    //     await this.vendorGroupEnName.fill(EnName);
    //     await this.vendorGroupArName.click();
    //     await this.vendorGroupArName.fill(ArName);
    //     await this.selectClassification.click();
    //     await this.Classification.click();
    //     // await this.PrefixCode.click();
    //     // await this.PrefixCode.fill(Prefix);
    //     await this.saveBtn.click();
    //     await this.requiredText.isVisible(); 

    // }


}