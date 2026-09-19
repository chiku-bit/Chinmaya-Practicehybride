import { Page } from "@playwright/test";
//To provide test data & obj/element related to whole application/project
export class global{
    constructor(public page: Page){
    }
//****************Testdata************
public url:string = 'https://ctcorphyd.com/SureshIT/login.php';
public username:string = 'sureshit';
public password:string = 'sureshit';
public empfirstname:string = 'qwer';
public emplastname: string = 'asdf';
public filepath: string = "C:/Users/HP/OneDrive/Desktop/Chiku-Docs/Macaw.jpg";
public empid: string = 'Emp. ID';
public code: string = '';
//**************************Obj/Element*************************
public texebox_login:string    = "//input[@name='txtUserName']";
public textbox_password:string = "//input[@name='txtPassword']";
public click_login:string = "//input[@value='Login']";
public click_logout:string = "//a[text()='Logout']";
public frame_empinfo:string = "//iframe[@id='rightMenu']";
public add_button:string = "//input[@value='Add'][@type='button']";
public code_field:string = "//input[@id='txtEmployeeId']";
public emp_firstname:string = "//input[@id='txtEmpFirstName']";
public emp_lastname:string = "//input[@id='txtEmpLastName']";
public emp_choosefile:string = "//input[@id='photofile']";
public emp_save:string = "//input[@type='button'][@title='Save']";
public PMI_Link: string = "//span[@class='drop current']";
public Emp_list: string = "//span[text()='Employee List']";
public searchby: string = "//select[@name='loc_code']";
public searchfor: string = "//input[@id='loc_name']";
public search: string = "//input[@value='Search']";
public checkbox:string = "//input[@name='chkLocID[]']"
public deletebutton: string = "//input[@value='Delete']";

}
