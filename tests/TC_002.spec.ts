import {test} from '@playwright/test'
import { general } from '../lib/General';

test('TC_002-HRMS Login & Add Emp', async({page})=>{
    let generaltwo = new general(page);
    generaltwo.OpenApplication();
    await page.waitForTimeout(7000);
    generaltwo.Login();
    await page.waitForTimeout(7000);
    generaltwo.LoginWithpassword();
    await page.waitForTimeout(7000);
    generaltwo.Addempdetails();
    await page.waitForTimeout(7000);
    generaltwo.uploadimage();
    await page.waitForTimeout(4000);
    generaltwo.save();
    await page.waitForTimeout(100000);
    generaltwo.hoverclick();
    await page.waitForTimeout(7000);
    generaltwo.searchemp();
    await page.waitForTimeout(7000)
    generaltwo.deletteemp();
    await page.waitForTimeout(7000)
    generaltwo.Logout();
    await page.waitForTimeout(7000);
});