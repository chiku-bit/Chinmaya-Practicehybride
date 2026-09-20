//To provide actual test case
import {test} from '@playwright/test'
import { general } from '../lib/General';

test('TC_001-HRMS Login Application', async({page})=>{

       /* page.on('dialog',async(dialog)=>{
            let msg = dialog.message();
            await page.waitForTimeout(3000);
            console.log(msg);
            dialog.accept();
        });
*/
//perform test steps
let generalone = new general(page);
generalone.OpenApplication();
await page.waitForTimeout(7000);
//generalone.waitstmt();
generalone.Login();
await page.waitForTimeout(7000);
//generalone.waitstmt();
generalone.LoginWithpassword();
await page.waitForTimeout(7000);
generalone.Logout();
await page.waitForTimeout(7000);
//generalone.waitstmt();
 console.log('Execution is done after error done');      
});
