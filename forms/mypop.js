function my_btn_download_hide(a){

    let name_field = document.getElementById('Download_popup_name').value;
    let email_field = document.getElementById('Download_popup_email').value;


    if(name_field === '' || email_field === ''){
        if(a=== "my_pop_btn_animate_one"){
            document.getElementById("my_pop_btn_animate_one").style.display='none';
            document.getElementById("my_pop_btn_animate_two").style.display='block';
        }
        else{
            document.getElementById("my_pop_btn_animate_one").style.display='block';
            document.getElementById("my_pop_btn_animate_two").style.display='none';
        }
    }



}
