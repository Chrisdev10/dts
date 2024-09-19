import { EventDto } from '@Dto/eventsDto';
import { Response } from '@Dto/response';
import axios from 'axios';
import { useEffect, useState } from 'preact/hooks';
import { Carousel } from 'react-bootstrap';

export function Events() {
  const [data, setData] = useState<Response<EventDto>>();

  useEffect(() => {
    const fetchData = async () => {
      const url = import.meta.env.VITE_LOCAL_URL_BACKEND;
      const response = await axios.get(`${url}/event/all`);
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h2 className={'section__title'}>upcoming events</h2>
      <Carousel style={'height:300px'} interval={6000}>
        {data?.data.map((e, index) => {
          return (
            <Carousel.Item style={'height:300px'} key={`carouselItem${index}`}>
              <img className="d-block w-100" src={`data:image/png;base64,${e.fileContent}`} alt="First slide" />
              <Carousel.Caption>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
