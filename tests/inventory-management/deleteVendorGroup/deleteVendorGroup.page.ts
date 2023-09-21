import { Page,Locator } from "@playwright/test";
export class deleteVendorGroup{

    readonly page:Page;
    readonly enNameEnlist:Locator;
    readonly deleteVGBtn:Locator;
    readonly yesVGBtn:Locator;
    readonly noVGBtn:Locator;
    readonly closeVGBtn:Locator;
    // readonly vendorGroupEnName:Locator;
    // readonly vendorGroupArName:Locator;
    // readonly selectClassification:Locator;
    // readonly Classification:Locator;
    // readonly PrefixCode:Locator;
    // readonly saveBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.enNameEnlist=page.locator('[data-text-field="EnName"]');
        this.deleteVGBtn=page.getByRole('button', { name: 'Delete' });
        this.yesVGBtn=page.getByRole('button', { name: 'Yes' });
        this.noVGBtn=page.getByRole('button', { name: 'No' });
        this.closeVGBtn=page.getByRole('button', { name: 'x' });
        // this.vendorGroupEnName=page.locator('[class="only-left-text form-control"]');
        // this.vendorGroupArName=page.locator('[class="only-right-text form-control"]');
        //this.selectClassification=page.getByText('MedicalConsumable');
        //this.Classification=page.getByText('MedicalService');
        // this.PrefixCode=page.locator('[placeholder="Add Vendor Group Prefix"]');
        // this.saveBtn=page.locator('[class="k-button mx-2 save-button"]');
    }

    async  Navigate_To_CreateVG(url:string) {
        await this.page.goto(url);
        
    }
    async deleteVG(EsraaVGListEn:string){
        await this.enNameEnlist.click();
        await this.enNameEnlist.fill(EsraaVGListEn);
        await this.enNameEnlist.press('Enter');
        await this.deleteVGBtn.first().click();
        await this.yesVGBtn.click();
        // await this.vendorGroupEnName.click();
        // await this.vendorGroupEnName.fill(EnName);
        // await this.vendorGroupArName.click();
        // await this.vendorGroupArName.fill(ArName);
        //await this.selectClassification.click();
        //await this.Classification.click();
        // await this.PrefixCode.click();
        // await this.PrefixCode.fill(Prefix);
        // await this.saveBtn.click();

    }
    async CanceldeleterequestVG(EsraaVGListEn:string){
        await this.enNameEnlist.click();
        await this.enNameEnlist.fill(EsraaVGListEn);
        await this.enNameEnlist.press('Enter');
        await this.deleteVGBtn.first().click();
        await this.page.waitForTimeout(3000);
        await this.noVGBtn.click();
    }

    async ColsedeleterequestVG(EsraaVGListEn:string){
        await this.enNameEnlist.click();
        await this.enNameEnlist.fill(EsraaVGListEn);
        await this.enNameEnlist.press('Enter');
        await this.deleteVGBtn.first().click();
        await this.closeVGBtn.click();
    }

}