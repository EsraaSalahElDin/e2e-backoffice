import { Page,Locator } from "@playwright/test";
export class loginpage{

    readonly page:Page;
    readonly userNaefield:Locator;
    readonly passwordField:Locator;
    readonly loginBtn:Locator;
    //readonly userNameLbl:Locator;
    constructor(page:Page)
    {
       this.page=page;
       this.userNaefield=page.locator('[id="userName"]');
       this.passwordField=page.locator('[id="password"]');
       this.loginBtn=page.locator('[class="btn btn-block submit-btn"]');
    }

async  Navigate_To_Login(url:string) {
    await this.page.goto(url);
    
}

async  perform_login(user:string,pass:string) {
    await this.userNaefield.click();
    await  this.userNaefield.fill(user);
    await this.passwordField.click();
    await this.passwordField.fill(pass);
    await this.loginBtn.click();
    
}

}