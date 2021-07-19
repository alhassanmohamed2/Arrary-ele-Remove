document.querySelector(".remove").style.visibility = "visible";
document.querySelector(".element").style.visibility = "visible";


(function (logger) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }

            output += "</span>&nbsp;";
        }

        logger.innerHTML += output + "<br>";
        console.old.apply(undefined, arguments);
    };
})(document.getElementById("logger"));

//Binary Search Function
let binarySearch = function (arr, x) { 
   //Sort the array to make the binary search works
    arr.sort();
    arr.sort(function(a, b) {
    return a - b;
    });
    let start=0, end=arr.length-1; 
          
    // Iterate while start not meets end 
    while (start<=end){ 
  
        // Find the mid index 
        let mid=Math.floor((start + end)/2); 

        //Fast check the bounders of the array-----------------------
        if(arr[end]===x) return true
        if(arr[start]===x) return true
        if (arr[mid]===x) return true; 
        //----------------------------------------------------------

        // Else look in left or right half accordingly 
        else if (arr[mid] < x)  
             start = mid + 1; 
        else
             end = mid - 1; 
    } 
   
    return false; 
}
   
var n = prompt("Enter You Array Size")
var arr = [];
for(var i=1;i<=n;i++){
var str = prompt("Enter Array Element no. "+i);
arr.push(str);
}

console.log("Your Array is:" ,arr , "\n");
const btn = document.querySelector(".remove");



//Button action code
function reveal(e){
    e.preventDefault();
    var check_dub = false;
    var element = document.querySelector(".element").value;   

    //Check if the element exist to remove it
    if (binarySearch(arr, element)){
        const index = arr.indexOf(element);
        if (index > -1) {
          arr.splice(index, 1);
        }
    console.log("Your Array after Sorted & remove the element: ",arr);
    }
    else console.log("Element not found!<br>"); 
       
}
btn.onclick = reveal;

