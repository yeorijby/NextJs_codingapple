import Image from "next/image";

export default function List() {
  let 상품 = ['토마토', '파스타', '코코넛'];
  let 가격 = [80, 50, 40];
  let good = [[상품[0], 가격[0]], [상품[1], 가격[1]], [상품[2], 가격[2]]];

    return (
      <div>
        <h4 className="title">상품 목록</h4>
        {
          good.map((a, i) =>{
            return (
              <div className="food">
                <img src={"food" + i + ".png"} className="food-img"/>
                <h4>{a[0]} ${a[1]}</h4>
              </div>              
            )
          })
        }
      </div>
    )
  }
  