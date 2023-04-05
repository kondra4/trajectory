# Trajectory

-   `npm install` — install dependencies
-   `npm start` — start demo

### Основной стек:
- React
- TypeScript
- Redux Toolkit
- RTK query
- 2gisMapGL
- Ant Design


### Обязательные требования:
- Получить данные объектов из API путем REST-запроса. 
- [**RTK query**](https://github.com/kondra4/trajectory/blob/1d79c42414db526b2c0b84413b90d9c93e3f9297/src/Api.ts#L16)
- Используя данные отрисовать компоненты объектов в виде карточек с полями<br/>
  [**List**](https://github.com/kondra4/trajectory/blob/1d79c42414db526b2c0b84413b90d9c93e3f9297/src/modules/sidebar/Sidebar.tsx#L34)
- Реализовать сортировку объектов по значениям (год выпуска и стоимость).<br/>
  [**Sort**](https://github.com/kondra4/trajectory/blob/1d79c42414db526b2c0b84413b90d9c93e3f9297/src/modules/sidebar/carsListSlise.tsx#L51)
- Добавить возможность редактирования и удаления карточек на фронтенд части (изменение названия марки, модели и стоимости)..<br/>
  [**Edit**](https://github.com/kondra4/trajectory/blob/1d79c42414db526b2c0b84413b90d9c93e3f9297/src/modules/sidebar/ModalWindow.tsx#L12)
### Дополнительно:
- Реализовать отображение объектов на карте, использую их координаты. (API можно использовать любое).<br/>
  [**2gis**](https://github.com/kondra4/trajectory/blob/1d79c42414db526b2c0b84413b90d9c93e3f9297/src/modules/map/Mapgl.tsx#L43)