import React, { useState } from 'react';
import styled from 'styled-components';


const dummyData = [
  {
    id: 1,
    title: "억만장자 통계 데이터셋 분석",
    description: "이 자료는 2022년 억만장자들의 데이터들을 가지고 있습니다. 억만장자의 세계와 그들의 부에 대한 심층적인 정보를 제공하는 포괄적인 데이터셋에 대한 분석 내용입니다. 다양한 기능을 갖춘 이 데이터 세트는 부의 분배 역학, 비즈니스 산업 정보를 제공합니다. 전 세계 억만장자의 순위, 순자산, 산업 및 인구통계를 살펴보세요. 경제학자, 데이터 분석가 또는 단순히 세계에서 가장 부유한 개인에 대해 궁금해하는 사람이라면 이 데이터셋를 통해 억만장자의 흥미로운 세계를 탐구할 수 있습니다. \n\n\n\n 출처:https://www.kaggle.com/datasets/nelgiriyewithana/billionaires-statistics-dataset/code?datasetId=3795419&sortBy=commentCount",
    imageLink: "/images/mmmm.png", // 상대 경로로 수정
  },
  {
    id: 1,
    title: "억만장자의 순위와 성별",
    description: "억만장자들 사이에서도 상위에 위치한 사람들의 자산은 눈에 띄게 높은 것을 볼 수 있고, 자산이 많을수록 남성의 비율이 올라가는 것을 알 수 있습니다. 자산이 가장 많은 사람은 약 200k(1k는 100,000달러), 약 260조원 가량의 자산이 있는 것을 알 수 있습니다."
  ,
    imageLink: "/images/genderRank.png", // 상대 경로로 수정
  },
  {
    id: 2,
    title: "억만장자가 가장 많은 상위 10개 국가",
    description: "역시나 가장 많은 억만장자를 보유하고 있는 나라는 미국이고, 이어서 중국과 인도에도 상당히 많은 억만장자들이 있는 것을 알 수 있습니다. 그 외에도 독일, 영국, 러시아, 스위스, 홍콩, 이탈리아 마지막으로 싱가포르까지 상위 10위 안에 들어와 있는 것을 알 수 있습니다. \n\n대한민국은 없네요 ㅜㅜ",
    imageLink: "/images/countries.png",
  },
  {
    id: 3,
    title: "억만장자의 성별분포",
    description: "억만장자들의 성별분포를 확인해보면 87.2% 대 12.8%로 남성의 비율이 훨신 높을 것을 알 수 있습니다.",
    imageLink: "/images/genderRate.png",
  },
  {
    id: 4,
    title: "억만장자가 가장 많이 하는 상위 10개 사업",
    description: "억만장자들이 하는 사업을 보면 금융과 투자(finance & investment) 분야가 가장 많은 곳을 알 수 있고, 기술(technology)과 제조업(manufacturing)도 상당히 많이 하는 것을 알 수 있습니다. 이어서 패션, 음식, 건강, 부동산, 에너지, 미디어와 엔터테이번트 분야가 10위 안에 들어와 있는 것을 알 수 있습니다.",
    imageLink: "/images/category.png",
  },
  {
    id: 5,
    title: "창업과 상속 비율",
    description: "억만장자 들 중 41.1%는 부를 상속받아 억만장자가 되었다는 것을 알 수 있습니다. 스스로 자산을 만든 억만장자는 58.9% 정도이네요.",
    imageLink: "/images/self.png",
  },
  // 추가 아이템들...
];
const SidebarWrapper = styled.div`
  width: 10%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const MenuItem = styled.div`
  list-style: none;
  cursor: pointer;
  width:100%;
  display:flex;
  height: 10rem;
  background-color: ${({ isSelected }) => (!isSelected ? 'rgb(148, 209, 204)' : '#265a81')};

  color: black;
  font-size: 25px;
  font-weight:1000; 
  display: flex;
  align-items:center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  margin-left: 10%; /* Sidebar의 너비 + 여유 여백 */
  width: 90%; 
  background-color:rgb(234, 244, 219);
`;

const Content = styled.div`
  background-color:rgb(234, 244, 219);
  padding: 20px;
  height: 100vh;
  width : 700px;
`;

const Sidebar = ({ onMenuItemClick, selectedScreen }) => {
  const menuItems = ['설명','자료 1', '자료 2', '자료 3', '자료 4', '자료 5'];

  return (
    <SidebarWrapper>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => onMenuItemClick(index)}
            isSelected={selectedScreen === index}
          >
            {item}
          </MenuItem>
        ))}
    </SidebarWrapper>
  );
};

const App = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);

  const handleMenuItemClick = (index) => {
    setSelectedScreen(index);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        onMenuItemClick={handleMenuItemClick}
        selectedScreen={selectedScreen}
      />
      <ContentWrapper>
        <Content>
          <h2>{dummyData[selectedScreen].title}</h2>
          <h3>{dummyData[selectedScreen].subtitle}</h3>
          <p style={{whiteSpace: "pre-wrap"}}>{dummyData[selectedScreen].description }</p>
          <img
            src={dummyData[selectedScreen].imageLink}
            alt={dummyData[selectedScreen].title}
          />
        </Content>
      </ContentWrapper>
    </div>
  );
};

export default App;