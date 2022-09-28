// // $('button').click(()=>{
// //     $('div').load('test.html');
// // })



// // $('.header_section').load('header.html')
// // $('.body_section').load('body.html', function(responseTxt, statusTxt, xhr){
// //     if(statusTxt == "Success"){
// //         console.log('Data Loaded Successfully!')
// //     }else if(statusTxt == "error"){
// //         console.log('Something Went Wrong')

// //     }
// // })
// // $('.footer_section').load('footer.html')
// // var plc = $('.body_section')
// // var out = '';
// // $.get('products.json', (data)=>{
// //     console.log(data)
// //     for(i in data){
// //         out +=`${data[i].name + "Dep"+ data[i].Dep} <br>`
// //         plc.html(out)
// //         console.log(data[i].name + "Dep"+ data[i].Dep)
// //     }
    
    
// // })

// $.getJSON('https://jsonplaceholder.typicode.com/posts', (data)=>{
//     console.log(data)
//     $.each(data, (i,pro)=>{
//         $.('body_section').append(pro.name + '<br>')
//     })
// })




$.ajax({
    method: "GET",
    url: "http://jsonplaceholder.typicode.com/posts",
    dataType: "json"
})
.done(function(data){
$.each(data, (i,val)=>{
    $('.body_page').append(`<b>${val.title}</b><br> <p>${val.body}</p><br><hr>`)
})

})