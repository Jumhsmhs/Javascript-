console.log('Goodbye World');

let x = 10;
console.log(x);

let a = 10;
let b = 12;
let c = 2;
let d = a + b + c;
console.log(d);

// ข้อมูลชนิดตัวเลขทศนิยม
let myData = 5.5;
// ข้อม฿ลแบบตัวอักษร
let myData2 = 'absc_fg';
//ข้อม฿ลแบบ boolean เอาไว้ตรวจสอบเงื่อนไข และวนลูป
let myData3 = true;
let myData4 = false;

//การบวกข้อความคือการเอาข้อความมาต่อกัน ไม่ใช่บวกกัน
let ac = '12';
let cc = '16';
console.log(ac + cc);

// ตัวเลขบวกข้อความจะได้ค่าเท่ากับข้อมูลบวกข้อความ วิธีใช้คือต้องใช้ระบุว่าเป็น Number 
let n = 12;
let m = Number('16')
console.log(n + m);

//การบวกลบคูนหารและเปอร์เซ็นต์
a1 = 3 + 2;    //5
a2 = 3 - 2;    //1
a3 = 3 * 2;    //6
a4 = 3 / 2;    //1.5
a5 = 3 ** 2;    //9 ยกกำลัง
a5 = 3 ** 2;    //9 ยกกำลัง
a6 = 3 % 2;    //1 หาเศษที่ได้จากการหาร

//การพวกค่าเพิ่มไปอีก 1 
x = 5;
x = x + 1;    //6
x++;          //6


//การบวกค่าเพิ่มมากกว่า 1 ตามที่เรากำหนดไว้
x = 5;
x += 5;        //10

//แน่นอนว่ามีครบหมด + - * /

//การใช้เครื่องหมายแบบ Boolean

let xx = 7;
let yy = 5;

let b1 = xx > yy;       //true
let b2 = xx >= yy;       //true

let b3 = xx < yy;       //false
let b4 = xx <= yy;       //false

let b5 = xx === yy;       //false    การเปรียบเทียบว่า xx เท่ากับ yy หรือเปล่า
let b6 = xx !== yy;       //true


let p = true;
let q = false;

let w1 = p && q;      //false  และ
let w2 = p || q;      //true   หรือ
let w3 = !p;          //false  ตรงข้ามกับที่เป็น



//การตรวจสอบเงื่อนไข

let score = 69;

if (score >= 80) {
    console.log('Grade A');
}
else if (score >= 70) {
    console.log('Grade B');
}
else {
    console.log('Grade F');
}


//Loop การทำงานซ้ำไปซ้ำมา
for (let i = 1; i <= 12; i++) {
    //การทำงานของ Continue จะเเป็นการทำงานแบบข้ามลูปนี้ไป อันนี้คือการเขียนเงื่อนไข
    //ถ้า i หาร 2 ลงตัว มันจะข้าม Continue
    if (i % 2 === 0) {
        continue;
    }
    let answer = i ** 2;
    console.log(answer);
}

for (let i = 1; i <= 12; i++) {
    //ถ้า i หาร 10 ลงตัว มันจะทำการ break ออกไปทัน มันจะหยุดทันที
    if (i % 10 === 0) {
        break;
    }
    let answer = i ** 2;
    console.log(answer);
}


console.log("*******************************");


//การใช้สูตรคณิต หาพื้นที่ วิธีนี้ไม่ค่อยดี
let length = 2;
let width = 2;
let height = 3;
let baseArea = length * width;
let pyramidVolume = 1 / 3 * baseArea * height;
console.log(pyramidVolume);


console.log("*******************************");

//วิธีที่ดี การใช้ฟังก์ชัน
function getPyramidArea(length, width, height) {
    let baseArea = length * width;
    let pyramidVolume = 1 / 3 * baseArea * height;
    //console.log(pyramidVolume);
    return pyramidVolume;
}

let aera1 = getPyramidArea(2, 2, 3);
let aera2 = getPyramidArea(2, 4, 6);
console.log("Area 1 = " + aera1, "Area 2 = " + aera2);