# FindYourHat
 JavaScript Text Game

#### Replit:
https://replit.com/@Kin-TingTing/Find-Your-Hat#index.js

#### 簡易教學:
https://docs.google.com/document/d/1TuOO3Mp-w71nr6FtZCeABUTBkZy6ASNjGVf0egCZHDs/edit?usp=sharing

<details><summary>1. 設一個4x4的array，console.log隨意座標以理解其座標顯示方式</summary>
<p>

```js
   let arr = 
   [
   	[ '00', '01', '02', '03' ],
   	[ '10', '11', '12', '13' ],
   	[ '20', '21', '22', '23' ],
   	[ '30', '31', '32', '33' ]
   ];
   console.log(array[3][2]); //'32'
   console.log(array[1][3]); //'13'
```
</p>
</details>

<details><summary>2. 設定x和y，利用修改x、y的方式，移動到不同的座標</summary>
<p>
假設 x = 3, y = 2<br>
array[x][y] = array[3][2] = '32'<br>
array[x][y-1] = array[3][1] = '31'
</p>
</details>

<details><summary>3. 把__第1步__的array內容全替換為'░'</summary>
<p>

```js
   let arr = 
   [
   	[ '░', '░', '░', '░' ],
   	[ '░', '░', '░', '░' ],
   	[ '░', '░', '░', '░' ],
   	[ '░', '░', '░', '░' ]
   ];
```
</p>
</details>

<details><summary>4. 把每1行__.join('')__在一起，分4次console.log(因為有4行)</summary>
<p>
output結果：<br>
░░░░<br>
░░░░<br>
░░░░<br>
░░░░<br>
例子：

```js
   let exampleArr = [ [ '2', '3', '3', '3' ], [ '1', '2', '3', '4' ] ];
   console.log(exampleArr[0].join('')); // output: 2333
```
</p>
</details>

<details><summary>5. 預設x和y=0，並把array[x][y]替換為'+'</summary>
<p>
output結果：<br>
+░░░<br>
░░░░<br>
░░░░<br>
░░░░
</p>
</details>

6. 把移動後的座標內容設為'+'

7. 把array的一些格子換成'O'和'^'<br>
+░O░<br>
░O░░<br>
░░^O<br>
░░░░<br>
    a. 移動（__第2步已做__）<br>
    b. __檢查座標是O/^，設置輸贏條件 ← 新增__<br>
    c. 座標不是O和^，（__第6步已做__）<br>
    
8. 設定隨機地圖<br>
   a. 設4個0至array.length-1的隨機數（以上為0-3），例如a、b、c、d<br>
   <details><summary>b. 設e儲存座標內容<br></summary>
       <p>
       i.   e儲存array[a][b]<br>
       ii.  array[a][b]換成array[c][d]<br>
       iii. array[c][d]換成e
       </p>
   </details>
   
   c. __以上8的a、b步驟循環至少16次__
