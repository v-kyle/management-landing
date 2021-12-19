/* eslint-disable max-len */
import { v4 } from 'uuid';
import { IPost } from './Models';
import octopus from './assets/img/octopus.png';
import pareto1 from './assets/img/pareto1.png';
import turtle from './assets/img/turtle.png';

export const posts: IPost[] = [
  {
    id: v4(),
    title: 'Стандарты ISO 9000',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Processnyj-podhod-soglasno-ISO-9000.png',
    bigImage: 2,
    text: `Соответствие требованиям ISO 9001 свидетельствует о некотором уровне надёжности поставщика и добротности его компании. С точки зрения современных компаний соответствие требованиям ISO 9001 — тот минимальный уровень, который даёт возможность вхождения в рынок. Сам сертификат соответствия ISO 9001 является внешним независимым подтверждением достижения требований стандарта.
Цель серии стандартов ISO 9000 — стабильное функционирование документированной системы менеджмента качества продукции предприятия-поставщика. Исходная направленность стандартов серии ISO 9000 была именно на отношения между компаниями в форме потребитель/поставщик. С принятием в 2000 году третьей версии стандартов ISO 9000 большее внимание стало уделяться способностям организации удовлетворять требования всех заинтересованных сторон: собственников, сотрудников, общества, потребителей, поставщиков. ISO 9004 делает акцент на достижение устойчивого успеха. Указанные стандарты помогают предприятиям формализовать их систему менеджмента, вводя такие системообразующие понятия, как внутренний аудит, процессный подход, корректирующие и предупреждающие действия.`,
  },
  {
    id: v4(),
    bigImage: 2,
    title: 'Диаграмма Исикавы',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Fishbone.svg/1280px-Fishbone.svg.png',
    text: `Диаграмма Исикавы — графический способ исследования и определения наиболее существенных причинно-следственных взаимосвязей между факторами и последствиями в исследуемой ситуации или проблеме. Диаграмма названа в честь одного из крупнейших японских теоретиков менеджмента профессора Каору Исикавы, который предложил её в 1952 году (по другим данным — в 1943-м) как дополнение к существующим методикам логического анализа и улучшения качества процессов в промышленности Японии.
Исикава является одним из разработчиков новой концепции организации производства, воплощённой на фирме «Тойота». Предложенная профессором Исикавой схема ясно показывает работу над улучшением качества производственных процессов. Она, как и большинство инструментов качества, является средством визуализации и организации знаний, которое систематическим образом облегчает понимание и конечную диагностику определённой проблемы.`,
  },
  {
    id: v4(),
    title: 'Диаграмма Парето',
    bigImage: 2,
    image: pareto1,
    text: `
      Диаграмма Парето — графическое отражение закона Парето, кумулятивной зависимости распределения определённых ресурсов (накопленного богатства, результаты голосования…) или результатов от большой совокупности (выборки) причин (например, от количества населения, активности участников…). Один из семи основных инструментов измерения, оценки, контроля и улучшения качества производственных процессов, входящих в «семьи инструментов контроля качества» <br />
      На диаграмме Парето содержатся столбцы, отсортировали данные по убываю и линию, представляющую совокупный итог в процентах. Диаграммы Парето выделяют основные факторы в наборе данных и считаются одним из семи основных инструментов контроля качества, так как их легко увидеть. <br />
      `,
  },
  {
    id: v4(),
    title: 'Диаграмма осьминог',
    text: 'С помощью диаграммы "осьминог" можно идентифицировать число направленных на потребителя процессов, а также на её основе можно судить о характере взаимодействия организация/потребитель.',
    image: octopus,
    bigImage: 2,
  },
  {
    id: v4(),
    title: 'Операционное определение',
    text: `
      Требование - Потребность или ожидание, которое установлено (задано), обычно предполагается или является обязательным <br />
      Испытание - Определение одной или нескольких характеристик в соответствии с процедурой <br />
      Анализ - Деятельность, предпринимаемая для определения пригодности, адекватности и результативности рассматриваемого объекта для достижения поставленных целей <br />
      Несоответствие - Определение одной или нескольких характеристик в соответствии с процедурой
    `,
  },
  {
    id: v4(),
    title: 'Цикл PDCA',
    text: `
      PDCA (англ. «Plan-Do-Check-Act» - планирование-действие-проверка-корректировка) циклически повторяющийся процесс принятия решения, используемый в управлении качеством. Также известен как принцип Деминга-Шухарта. <br />
      Методология PDCA представляет собой простейший алгоритм действий руководителя по управлению процессом и достижению его целей. Цикл управления начинается с планирования. <br />
      <strong>Планирование</strong> установление целей и процессов, необходимых для достижения целей, планирование работ по достижению целей процесса и удовлетворения потребителя, планирование выделения и распределения необходимых ресурсов. <br />
      <strong>Выполнение</strong> выполнение запланированных работ. <br />
      <strong>Проверка</strong> сбор информации и контроль результата на основе ключевых показателей эффективности (KPI), получившегося в ходе выполнения процесса, выявление и анализ отклонений, установление причин отклонений. <br />
      <strong>Воздействие</strong> принятие мер по устранению причин отклонений от запланированного результата, изменения в планировании и распределении ресурсов. <br />
    `,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/PDCA_Cycle.svg/1280px-PDCA_Cycle.svg.png',
    bigImage: 2,
  },
  {
    id: v4(),
    title: 'Диаграмма Черепаха',
    image: turtle,
    bigImage: 3,
    text: 'Диаграмма «Черепаха» позволяет описать вход и выход процесса, а также его компоненты, благодаря которым возможно получить прогнозируемый выход. Также с помощью этой диаграммы можно наглядно анализировать риски процесса.',
  },
];