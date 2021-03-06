/* eslint-disable max-len */
import { v4 } from 'uuid';
import { IPost } from './Models';
import octopus from './assets/img/octopus.png';
import specsTable from './assets/img/specifications-table.png';
import sizesStatuses from './assets/img/sizes-status.png';
import isikava from './assets/img/isikava.png';
import pareto1 from './assets/img/pareto1.png';
import blockScheme from './assets/img/block-scheme.png';
import linksMatrix from './assets/img/links-matrix.png';
import planOfProcess from './assets/img/plan-of-proccess.png';
import checkList from './assets/img/check-list.png';
import defectsTable from './assets/img/defects-table.png';
import pareto2 from './assets/img/pareto2.png';
import isikava2 from './assets/img/isikava2.png';
import defectsTable2 from './assets/img/defects-table-2.png';
import pareto3 from './assets/img/pareto3.png';
import pareto4 from './assets/img/pareto4.png';
import listOfSolveProblem from './assets/img/list-of-solve-problem.png';
import turtle from './assets/img/turtle.png';
import octopus2 from './assets/img/octopus2.png';
import mapOfProcesses from './assets/img/map-of-processes.png';

export const reports: IPost[] = [
  {
    id: v4(),
    title: 'Основные сведения об организации',
    text: `
    Название организации: Череповецкий Металлургический комбинат – ПАО «СЕВЕРСТАЛЬ» <br />
    Дата основания: 24.08.1955 <br />
    Расположение: ул. Мира, 30, Вологодская область, Череповец, Россия, 162608 <br />
    Область отраслевой специализации: Машиностроение, металлобработка и металлургия <br />
    Сотрудников в организации: >23000 <br />
    `,
    image: 'https://img.artlebedev.ru/everything/severstal/chermk/images/everything-severstal-image-06.jpg',
    bigImage: 2,
  },
  {
    bigImage: 2,
    image: octopus,
    title: 'Диаграмма «осьминог»',
    id: v4(),
    text: `
    1 - Налаживание поставок производства <br />
    2 - Производство с индивидуальными требованиями <br />
    3 - Работа с браком предприятия <br />
    4 - Зарубежная логистика <br />
    5 - Предоставление информации о выпускаемой продукции <br />
    6 - Заключение контрактов на поставку продукции <br />
    7 - Производство продукции <br />
    `,
  },
  {
    id: v4(),
    title: 'Матрица характеристик',
    image: specsTable,
    bigImage: 2,
    text: 'Матрица характеристик позволяет оценить соответствие выпускаемой продукции к требованиям покупателей. Анализируя полноту этой матрицы заказчик может понять, насколько хорошо производимая продукция удовлетворяет его требованиям. Таблица два составлена в соответствии с ГОСТ 8732-78, о бесшовных стальных трубах.',
  },
  {
    id: v4(),
    title: 'Выборка из элементов нормально распределённой длины изделия',
    image: sizesStatuses,
    bigImage: 1,
    text: `
    Объем выборки n = 30 <br />
    Число степеней свободы = n - 1 = 29 <br />
    Уровень значимости a = 0.05 <br />
    Квантили распределения: <br />
    t<small>1-a</small>(n) = 1.6973 <br />
    t<small>1-a/2</small>(n) = 2.0423 <br />
    Среднеарифметическое значение <strong>x</strong> = 500.05 <br />
    Выборочное стандартное (среднеквадратичное) отклонение S = 0.54 <br />
    Предположение равенства выборочного среднего и заданного значений (нулевая гипотеза) отклоняется, если разница больше чем: 0.35мм <br />
    `,
  },
  {
    id: v4(),
    title: 'Диаграмма Исикавы',
    bigImage: 3,
    image: isikava,
    text: 'Диаграмма Исикавы предназначена для аккумуляции и систематизации факторов, вносящих вклад в ту или иную проблему. В данной работе строится диаграмма для проблемы «разброс значений длины трубы». Для построения используется способ, в соответствии с которым категории возможных причин сразу рисуются на схеме в виде главных ветвей. После чего для каждой категории на схеме рисуются всевозможные причины.',
  },
  {
    id: v4(),
    title: 'Диаграмма Парето',
    bigImage: 1,
    image: pareto1,
    text: 'На диаграмме Парето содержатся столбцы, отсортировали данные по убываю и линию, представляющую совокупный итог в процентах. Диаграммы Парето выделяют основные факторы в наборе данных и считаются одним из семи основных инструментов контроля качества, так как их легко увидеть.',
  },
  {
    id: v4(),
    title: 'Графическая модель процесса производства трубы',
    image: blockScheme,
    bigImage: 2,
    text: 'Блок-схема позволяет визуализировать процес производства трубы и наглядно увидеть последовательность необходимых шагов, используемые материалы и условия качества продукции.',
  },
  {
    id: v4(),
    title: 'Матрица связей',
    image: linksMatrix,
    text: 'Матрица связей связывает характеристики с процессами, позволяя оценить влияние процессов на ту или иную характеристику.',
    bigImage: 2,
  },
  {
    id: v4(),
    title: 'План управления процессом',
    text: 'Разработаем план управления процесса для толщины оцинковки трубы. Он позволяет управлять неустранимыми технологическими факторами, предупреждая отказы по время изготовления.',
    image: planOfProcess,
    bigImage: 2,
  },
  {
    id: v4(),
    title: 'PDCA',
    text: `
    Разработаем с помощью простейших инструментов менеджмента по-этапное решение проблемы в области качества в рамках цикла PDCA <br />
    Этап <strong>PLAN</strong>
    На предприятии в течение двух месяцев собирались данные с целью исследования отклонений в технологическом процессе, которые отображены в контрольном листе <br />
    `,
    image: checkList,
    bigImage: 2,
  },
  {
    title: 'Выявленные дефекты',
    id: v4(),
    image: defectsTable,
    bigImage: 2,
    text: `
    На основе контрольного листа можно составить таблицу дефектов процесса. <br />
    Больше всего дефектов в "плохое качество покрытия" - 50% от общего числа.
    `,
  },
  {
    title: 'Диаграмма Парето для дефектов',
    id: v4(),
    image: pareto2,
    text: '',
    bigImage: 1,
  },
  {
    id: v4(),
    title: 'Диаграмма Исикавы для дефекта',
    image: isikava2,
    bigImage: 3,
    text: 'Для выдвижения гипотез и выяснение причин проблем построим диаграмму Исикавы для выбранного дефекта',
  },
  {
    id: v4(),
    text: 'Анализируя построенную диаграмму составим таблицу дефектов, наиболее серьёзно влияющее на исследуемый объет. В следующей таблице представлены наиболее значимые дефекты, сильнее всего влияющие на процесс.',
    image: defectsTable2,
    title: 'Таблица дефектов плохого качества покрытия',
    bigImage: 3,
  },
  {
    id: v4(),
    text: 'Теперь построим диаграмму Паретто для полученных дефектов. Как видно из таблицы, многие дефекты связаны с ошибками технологического процесса и неправильными хранениями стали.',
    image: pareto3,
    title: 'Диаграмма Паретто для дефектов «плохого качества покрытия»',
    bigImage: 2,
  },
  {
    id: v4(),
    title: 'Анализ и реализация разработанных мер',
    text: `
      Проанализировав полученные данные, отдел качества решил, что наиболее значимыми факторами являются условиях хранения стали, плохое качество швов и неправильная калибровка оборудования. <br />
      Сварочный аппарат был направлен на экспертизу. По мимо этого отделом качества были значительно повышены требуемые условиях хранения стали. Также для сотрудников был разработан инструктаж по калибровки оборудования для всех сотрудников, работающих на производстве. <br />
      Этап <strong>DO</strong> <br />
      Благодаря экспертизе удалось устранить имеющиеся дефекты в сварочном станке, которые значительно ухудшали швы. Дополнительные инструктажи для рабочих стали проводить перед каждой сменой, а условия хранения стали были доведены до всех сотрудников склада. Также контроль за соблюдением условий со стороны отдела качества значительно усилился. <br />
    `,
  },
  {
    id: v4(),
    text: 'Построим диаграмму Паретто после реализации разработанных мер. После принятия мер, мы видим значительное снижение выбранного дефекта, тем самым показывая, что выявленные причины и предложенные меры смогли значительно повлиять на итоговый результат.',
    title: 'Этап оценки "CHECK"',
    image: pareto4,
    bigImage: 2,
  },
  {
    id: v4(),
    image: listOfSolveProblem,
    bigImage: 3,
    title: 'Этап внедрения "ACTION"',
    text: `
    Эта практики позволили существенно уменьшить число браков, а поэтому они были внедрены на постоянной основе. В итоге на заводе были введены следующие мероприятия: <br />
    1. Теперь сотрудники каждый месяц должны проводить инструктаж по калибровки приборов. <br />
    2. Сварочный станок теперь отправляется на ежемесячный техосмотр, что позволяет избежать дефектов сварки. <br />
    3. Также были существенно подняты требования к условиям хранения стали, которые были закреплены в официальных документах и обязательны для исполнения каждым работником склада. <br />
    `,
  },
  {
    id: v4(),
    title: 'Диаграмма черепаха',
    image: turtle,
    bigImage: 3,
    text: 'Построим диаграмма «Черепаха»для процесса «производство стали». Она позволяет описать вход и выход процесса, а также его компоненты, благодаря которым возможно получить прогнозируемый выход. Также с помощью этой диаграммы можно наглядно анализировать риски процесса.',
  },
  {
    id: v4(),
    title: 'Форма процесса предоставления информации',
    image: octopus2,
    bigImage: 3,
    text: 'Также построим аналогичную диаграмму для случая, когда покупатель хочет получить информацию о выпускаемой продукции.',
  },
  {
    id: v4(),
    title: 'Общая структурная схема процессов',
    image: mapOfProcesses,
    bigImage: 3,
    text: 'Теперь опишем всю карту процессов компании, которая позволяет сделать все процессы в компании более открытыми как для себя, так и для других компаний.',
  },
];
