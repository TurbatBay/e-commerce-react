import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import cardData from '../data/card';

function Swipers() {

    const sliderData = cardData.map(data => {
        return (
          <SmallCard
            img = {data.imgURL}
            title = {data.title}
            items = {data.items}
          />
        )
      })

    function SmallCard(props) {
        return (
          <SwiperSlide>
                <div className="small-card-inside-flex">
                    <img src={props.img} width="150px" alt='image'/>
                    <div>
                        <h2>{props.title}</h2>
                        <h3>{props.items}</h3>
                    </div>
                </div>
            </SwiperSlide>
        );
      }





    // {cardData.map(user => (
    //     <SwiperSlide key={user.id} className="slide">
    //         <div className='small-card-container'></div>

    //     </SwiperSlide>
    // ))}
      
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>{sliderData}</SwiperSlide>
      <SwiperSlide>{sliderData}</SwiperSlide>
      <SwiperSlide>{sliderData}</SwiperSlide>
      <SwiperSlide>{sliderData}</SwiperSlide>
      <SwiperSlide>{sliderData}</SwiperSlide>
      <SwiperSlide>{sliderData}</SwiperSlide>
      ...
    </Swiper>
  );
};
export default Swipers