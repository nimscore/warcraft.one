import Layout from "../../../components/Layout";
import Image from "next/image";
import Link from "next/link";

const intro = () => {
	return (
		<Layout title='Интро'>
			<Link className="arrow_r" href='/guide/brm/gameplay'>
				<Image src='/img/arrow.png' width={32} height={32} alt='arrow'/>
			</Link>
			
			{/*<div className="head_page">*/}
			{/*	<div className="block_1">*/}
			{/*		<h2>Введение</h2>*/}
			{/*	</div>*/}
			{/*	<div className="block_2">*/}
			{/*		<h2>dragonflight 10.5</h2>*/}
			{/*	</div>*/}
			{/*	<div className="block_3">*/}
			{/*		<h2>11 января 2023</h2>*/}
			{/*	</div>*/}
			{/*</div>*/}
			
			<div className="guide_content">
				<div className="r_space">
					<div className="line_1">
						<div className="block_11">
							<p>
								Lorrgs – удобный сайт для быстрого анализа бурстов и кулдаунов на боссах.
								Он позволяет посмотреть первые топ 50 логов на любом боссе и увидеть таймеры использования основных бурстов определенной специализации. Работает только для мифика. Этот сайт гораздо удобнее, чем вручную просматривать бои на warcraftlogs.com или wipefest.gg и позволяет сэкономить достаточно много времени, особенно если вы в первый раз пришли на босса.
							</p>
						</div>
						<div className="block_12">
							<p>
								RaidBots – cпециальная утилита для оптимизации вашего персонажа.
								Позволяет сравнить ваше снаряжение и многое другое для повышения вашего урона, основываясь на симуляции боев с одной или несколькими целями.
							</p>
						</div>
						<div className="block_13">
							<p>
								Subcreation – быстро посмотреть статистику по экипировке, талантам и всему-всему как с ключей, так и с рейдов.
							</p>
						</div>
					</div>
					
					<div className="line_2">
						<div className="block_21">
							<p>Хмелевар - крайне мобильный танк, который сочетает в себе пассивное уменьшение входящего урона, мощную коллекцию атакующих и защитных способностей. За годы, прошедшие с момента их появления в Mists of Pandaria, хмелевар неизменно остается одним из лучших танков в игре, и, обычно, он очень хорошо показывает себя в рейдах самых высоких уровней.
								
								Поговорим о самом главном и самом непонятном в хмелеваре, о том что делает хмелевара именно таким, какой он есть - Пошатывание. Это одновременно и дар и проклятье хмелевара, т.к. оно дает возможность переживать огромное количество единоразового урона, но при продолжительном высоком входящем уроне само же вас убьет. Пошатывание откладывает основную часть получаемого урона в уникальный эффект пошатывания, который в дальнейшем можно снять другими вашими способностями. Механика откладывания урона в эффект пошатывания или полное уклонение от него, делает хмелевара всегда желанным танком в рейдах любой сложности и эпохальных подземельях. Кроме того, хмелевар обладает высокой полезностью для рейда, во-первых, благодаря уникальному эффекту монаха Таинственное прикосновение, а во-вторых, за счёт невероятной мобильности.
								Слабой стороной Хмелевара являются невысокие показатели самоисцеления и низкий объем здоровья. Однако, Небесная удача несколько компенсирует это в совместных активностях, где обычно на вас накладываются исцеляющие эффекты (хоты) от лекарей.</p>
						</div>
						<div className="block_22">
							<p>
								БЛИЖАЙШИЕ ОБНОВЛЕНИЯ:
							</p>
							<p>
								Подробное описание талантов;
								Возвращение раздела c разбором способностей;
								Возвращение раздела с нюансами рейда Хранилище Воплощений.
							</p>
						</div>
					</div>
					
					<div className="line_3">
						<div className="block_31">
							<p>
								В первом сезоне Dragonflight разработчики хотели сделать сетовые бонусы, которые влияют на вашу игру минимально и их наличие или отсутствие у вас не было критичным. Так оно и вышло. Поддерживайте на себе 4 стака эффекта Ритм Хмелевара и все. Лишним не будет.
							</p>
						</div>
						<div className="block_32">
							<p>
								2 предмета: нанесенные удар по врагу с помощью Лапа тигра или Танцующий журавль дают вам эффект Ритм Хмелевара, который увеличивает исходящий и уменьшает входящий урон на 1% на 15 сек. Суммируется до 4х раз.
							</p>
						</div>
						<div className="block_33">
							<p>
								4 предмета: за каждый наложенный на вас эффект Ритма Хмелевара, Очищающий отвар снимает на 3% больше урона, отложенного в Пошатывание.
							</p>
						</div>
					</div>
				</div>
				
				<div className="l_space">
					<div className="block_41">
						<p>
							СИЛЬНЫЕ СТОРОНЫ:
						</p>
						<p>
							+ Пошатывание, Скрытые резервы, Очищающий отвар и Божественный отвар дают возможность выдерживать огромное количество урона. Кроме того, гарантируют плавное получение урона без резких скачков здоровья;
							+ Небесная удача дает преимущество в исцелении перед другими танками;
							+ Тигриное рвение, Кувырок и Трансцендентность дают невероятную мобильность, в сравнении с другими танками;
							+ Множество способностей для позиционирования противников, таких как: Столкновение, Призыв статуи Черного Быка и Круг мира;
							+ Способности для контроля противников, такие как: Круговой удар ногой и Паралич;
						</p>
					</div>
					<div className="block_42">
						<p>
							СЛАБЫЕ СТОРОНЫ:
						</p>
						<p>
							- Количество здоровья. Хмелевары имеют здоровье, сравнимое со здоровьем некоторых дпс классов. Это делает его уязвимым к продолжительному урону от магии и постоянному урону от дебафов;
							- Низкое самоисцеление. Дар быка и Устранение вреда призваны это исправить, но этого не всегда хватает;
							- Требование к большому количеству привязки горячих клавиш (биндов), которые необходимо отслеживать;
							- Может потребоваться установить дополнительные аддоны или WeakAura для отслеживания эффекта Пошатывание;
						</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default intro