# glicko2-rating-sample
グリコレーティング２がどんな感じなのかを試してみた。

## グリコレーティングについて

wikipediaを見てください。 https://ja.wikipedia.org/wiki/%E3%82%B0%E3%83%AA%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0

## このサンプルでやってること

- エントリーリスト分のプレイヤーを作って
- 標準偏差が30未満になるまで１対１で戦って
- ランキングを集計

ほとんど https://www.npmjs.com/package/glicko2 に書いてあるとおりの実装で、たくさん戦わせているだけです。

実行すると
```
Match No.338: Andrew Gilding [won] v [lost] Michael van Gerwen
    Andrew Gilding: 1672 → 1672
    Michael van Gerwen: 1571 → 1569
```
こういう結果がだーーーーっと出てきて、最終的に下記のようなランキングが出ます。
```
Robbie Green: [16 won, 8 lost] 1693(1640-1745)
Terry Jenkins: [12 won, 7 lost] 1670(1614-1726)
Mensur Suljovic: [21 won, 8 lost] 1666(1614-1719)
Gerwyn Price: [18 won, 15 lost] 1629(1583-1675)
Seigo Asada: [20 won, 12 lost] 1620(1574-1667)
Ricky Evans: [20 won, 10 lost] 1615(1563-1666)
Haruki Muramatsu: [15 won, 11 lost] 1602(1552-1652)
Adrian Lewis: [11 won, 8 lost] 1595(1541-1650)
Andrew Gilding: [22 won, 19 lost] 1588(1543-1632)
John Henderson: [15 won, 12 lost] 1576(1528-1624)
Max Hopp: [19 won, 16 lost] 1565(1519-1611)
Joe Murnan: [14 won, 11 lost] 1560(1506-1614)
Michael van Gerwen: [18 won, 18 lost] 1550(1504-1596)
Kim Huybrechts: [24 won, 19 lost] 1545(1502-1588)
Gary Anderson: [19 won, 13 lost] 1544(1496-1593)
Chris Dobey: [15 won, 12 lost] 1543(1491-1594)
Ron Meulenkamp: [13 won, 11 lost] 1541(1488-1595)
Kevin Painter: [11 won, 10 lost] 1541(1489-1593)
Michael Smith: [24 won, 20 lost] 1539(1497-1581)
Zoran Lerchbacher: [13 won, 11 lost] 1531(1479-1582)
Keegan Brown: [22 won, 18 lost] 1522(1480-1564)
Raymond van Barneveld: [18 won, 22 lost] 1505(1462-1547)
Ronny Huybrechts: [19 won, 18 lost] 1500(1455-1545)
Dimitri Van den Bergh: [12 won, 14 lost] 1496(1447-1545)
Jamie Lewis: [13 won, 13 lost] 1486(1434-1538)
Mervyn King: [14 won, 15 lost] 1466(1418-1514)
Jelle Klaasen: [12 won, 13 lost] 1464(1410-1517)
Steve Beaton: [13 won, 16 lost] 1452(1404-1501)
Joe Cullen: [9 won, 14 lost] 1451(1395-1508)
Jonny Clayton: [10 won, 13 lost] 1442(1391-1492)
Jamie Caven: [13 won, 15 lost] 1441(1392-1490)
Peter Wright: [10 won, 19 lost] 1430(1381-1480)
Christian Kist: [11 won, 16 lost] 1428(1378-1477)
Brendan Dolan: [12 won, 20 lost] 1427(1378-1476)
Dave Chisnall: [11 won, 14 lost] 1424(1371-1476)
Daryl Gurney: [12 won, 19 lost] 1415(1367-1463)
Alan Norris: [12 won, 11 lost] 1413(1358-1468)
Stephen Bunting: [12 won, 17 lost] 1404(1353-1455)
Rob Cross: [13 won, 17 lost] 1398(1345-1452)
Richard North: [10 won, 12 lost] 1360(1301-1420)
Simon Whitlock: [9 won, 17 lost] 1331(1280-1381)
Jan Dekker: [10 won, 20 lost] 1307(1256-1358)
Kyle Anderson: [10 won, 23 lost] 1275(1222-1327)
```

※ プレイヤーの名前はPDCの選手から取っています。ランダムで勝ち負けを決めているため、実際の成績とはまったく関係ありません。
