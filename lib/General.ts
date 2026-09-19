
import { expect } from "@playwright/test";
import { global } from "../lib/Global";
//This is used to provide the all re-usable functions/methods related to entire project/Application
export class general extends global{

    async OpenApplication(){
        await this.page.goto(this.url);
        console.log('Application is open')
    };
    async Login(){
        await this.page.locator(this.texebox_login).fill(this.username);
        //await this.page.locator(this.click_login).click();
        //await this.page.locator(this.textbox_password).fill(this.password);
            this.page.on('dialog',async(dialog)=>{
            let msg = dialog.message();
            await this.page.waitForTimeout(3000);
            console.log(msg);
            dialog.accept();
            })
    await this.page.waitForTimeout(7000);
    await this.page.locator(this.click_login).click();
    console.log('Enter password before click');
    };
    async LoginWithpassword(){
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.click_login).click();
    console.log('Re enter the password after the first attempt');
    await expect(this.page).toHaveTitle('SureshIT');
    };
    async waitstmt(){
    await this.page.waitForTimeout(3000);
    console.log("Wait time is executd sucessfully");
    };
    async Addempdetails(){
    let frame = this.page.frameLocator(this.frame_empinfo);
    await frame.locator(this.add_button).click();
    this.code = await frame.locator(this.code_field).inputValue();
    await frame.locator(this.emp_firstname).fill(this.empfirstname);
    await frame.locator(this.emp_lastname).fill(this.emplastname);
    console.log(this.code);
    console.log('Add Employee and store the Employee Code')
    };
    
    async uploadimage(){
        let frame = this.page.frameLocator(this.frame_empinfo);
        //const filepath = "C:/Users/HP/OneDrive/Desktop/Chiku-Docs/Macaw.jpg";
        await frame.locator(this.emp_choosefile).setInputFiles(this.filepath);
        console.log('File inserted sucessfully');
    }
    async save(){
        let frame = this.page.frameLocator(this.frame_empinfo);
        await frame.locator(this.emp_save).click();
        console.log('Clicked on save done');
    };

    async hoverclick(){
        await this.page.locator(this.PMI_Link).hover();
        await this.page.locator(this.Emp_list).click()
        await this.page.waitForTimeout(5000);
    };
   async searchemp(){
    let frame = this.page.frameLocator(this.frame_empinfo);
    await frame.locator(this.searchby).selectOption(this.empid);
    await frame.locator(this.searchfor).fill(this.code);
    await frame.locator(this.search).click();
    //await expect(frame.locator(this.)) -- will do later
   }

async deletteemp(){
let frame = this.page.frameLocator(this.frame_empinfo);
await frame.locator(this.checkbox).check();
await frame.locator(this.deletebutton).click();
}
    async Logout(){
    await this.page.locator(this.click_logout).click();
    console.log('Application closed sucessfully')
    }};


    /*
    async HandleAlert(){

            this.page.on('dialog',async(dialog)=>{
            let msg = dialog.message();
            await this.page.waitForTimeout(3000);
            console.log(msg);
            dialog.accept();
            })}

      */      
        
