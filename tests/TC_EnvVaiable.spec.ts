import {test} from '@playwright/test'

test ('Environment Assign', async ({page})=>{

//Open page on QA
console.log(process.env.BASE_URL);
})