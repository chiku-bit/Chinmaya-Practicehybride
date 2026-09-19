# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC_002.spec.ts >> TC_002-HRMS Login & Add Emp
- Location: tests\TC_002.spec.ts:4:5

# Error details

```
Error: locator.check: Test ended.
Call log:
  - waiting for locator('//iframe[@id=\'rightMenu\']').contentFrame().locator('//input[@name=\'chkLocID[]\']')
    - waiting for "https://ctcorphyd.com/SureshIT/index.php" navigation to finish...
    - navigated to "https://ctcorphyd.com/SureshIT/login.php"

```

# Test source

```ts
  1  | 
  2  | import { expect } from "@playwright/test";
  3  | import { global } from "../lib/Global";
  4  | //This is used to provide the all re-usable functions/methods related to entire project/Application
  5  | export class general extends global{
  6  | 
  7  |     async OpenApplication(){
  8  |         await this.page.goto(this.url);
  9  |         console.log('Application is open')
  10 |     };
  11 |     async Login(){
  12 |         await this.page.locator(this.texebox_login).fill(this.username);
  13 |         //await this.page.locator(this.click_login).click();
  14 |         //await this.page.locator(this.textbox_password).fill(this.password);
  15 |             this.page.on('dialog',async(dialog)=>{
  16 |             let msg = dialog.message();
  17 |             await this.page.waitForTimeout(3000);
  18 |             console.log(msg);
  19 |             dialog.accept();
  20 |             })
  21 |     await this.page.waitForTimeout(7000);
  22 |     await this.page.locator(this.click_login).click();
  23 |     console.log('Enter password before click');
  24 |     };
  25 |     async LoginWithpassword(){
  26 |     await this.page.locator(this.textbox_password).fill(this.password);
  27 |     await this.page.locator(this.click_login).click();
  28 |     console.log('Re enter the password after the first attempt');
  29 |     await expect(this.page).toHaveTitle('SureshIT');
  30 |     };
  31 |     async waitstmt(){
  32 |     await this.page.waitForTimeout(3000);
  33 |     console.log("Wait time is executd sucessfully");
  34 |     };
  35 |     async Addempdetails(){
  36 |     let frame = this.page.frameLocator(this.frame_empinfo);
  37 |     await frame.locator(this.add_button).click();
  38 |     this.code = await frame.locator(this.code_field).inputValue();
  39 |     await frame.locator(this.emp_firstname).fill(this.empfirstname);
  40 |     await frame.locator(this.emp_lastname).fill(this.emplastname);
  41 |     console.log(this.code);
  42 |     console.log('Add Employee and store the Employee Code')
  43 |     };
  44 |     
  45 |     async uploadimage(){
  46 |         let frame = this.page.frameLocator(this.frame_empinfo);
  47 |         //const filepath = "C:/Users/HP/OneDrive/Desktop/Chiku-Docs/Macaw.jpg";
  48 |         await frame.locator(this.emp_choosefile).setInputFiles(this.filepath);
  49 |         console.log('File inserted sucessfully');
  50 |     }
  51 |     async save(){
  52 |         let frame = this.page.frameLocator(this.frame_empinfo);
  53 |         await frame.locator(this.emp_save).click();
  54 |         console.log('Clicked on save done');
  55 |     };
  56 | 
  57 |     async hoverclick(){
  58 |         await this.page.locator(this.PMI_Link).hover();
  59 |         await this.page.locator(this.Emp_list).click()
  60 |         await this.page.waitForTimeout(5000);
  61 |     };
  62 |    async searchemp(){
  63 |     let frame = this.page.frameLocator(this.frame_empinfo);
  64 |     await frame.locator(this.searchby).selectOption(this.empid);
  65 |     await frame.locator(this.searchfor).fill(this.code);
  66 |     await frame.locator(this.search).click();
  67 |     //await expect(frame.locator(this.)) -- will do later
  68 |    }
  69 | 
  70 | async deletteemp(){
  71 | let frame = this.page.frameLocator(this.frame_empinfo);
> 72 | await frame.locator(this.checkbox).check();
     |                                    ^ Error: locator.check: Test ended.
  73 | await frame.locator(this.deletebutton).click();
  74 | }
  75 |     async Logout(){
  76 |     await this.page.locator(this.click_logout).click();
  77 |     console.log('Application closed sucessfully')
  78 |     }};
  79 | 
  80 | 
  81 |     /*
  82 |     async HandleAlert(){
  83 | 
  84 |             this.page.on('dialog',async(dialog)=>{
  85 |             let msg = dialog.message();
  86 |             await this.page.waitForTimeout(3000);
  87 |             console.log(msg);
  88 |             dialog.accept();
  89 |             })}
  90 | 
  91 |       */      
  92 |         
  93 | 
```