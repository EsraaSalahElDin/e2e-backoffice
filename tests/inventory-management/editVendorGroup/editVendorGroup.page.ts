import { Page,Locator } from "@playwright/test";
export class editVendorGroup{

    readonly page:Page;
    readonly enNameEnlist:Locator;
    readonly editVGBtn:Locator;
    readonly vendorGroupEnName:Locator;
    readonly vendorGroupArName:Locator;
    readonly selectClassification:Locator;
    readonly Classification:Locator;
    readonly PrefixCode:Locator;
    readonly saveBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.enNameEnlist=page.locator('[data-text-field="EnName"]');
        this.editVGBtn=page.getByRole('button', { name: 'Edit' });
        this.vendorGroupEnName=page.locator('[class="only-left-text form-control"]');
        this.vendorGroupArName=page.locator('[class="only-right-text form-control"]');
        this.PrefixCode=page.locator('[placeholder="Add Vendor Group Prefix"]');
        this.saveBtn=page.locator('[class="k-button mx-2 save-button"]');
    }

    async  Navigate_To_CreateVG(url:string) {
        await this.page.goto(url);
        
    }
    async editVG(EsraaVGListEn:string,EnName:string,ArName:string,Prefix:string){
        await this.enNameEnlist.click();
        await this.enNameEnlist.fill(EsraaVGListEn);
        await this.enNameEnlist.press('Enter');
        await this.editVGBtn.first().click();
        await this.vendorGroupEnName.click();
        await this.vendorGroupEnName.fill(EnName);
        await this.vendorGroupArName.click();
        await this.vendorGroupArName.fill(ArName);
        //await this.selectClassification.click();
        //await this.Classification.click();
        await this.PrefixCode.click();
        await this.PrefixCode.fill(Prefix);
        await this.saveBtn.click();

    }

}