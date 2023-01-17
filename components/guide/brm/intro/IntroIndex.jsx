import Image from "next/image";
import Link from "next/link";
import styles from "./Index.module.scss";
import Tab from "../../Tab";
import Menu from "../BrewMenu";
import TabCore from "../../TabCore";

const ContentIndex = () => {
	return (
		<div className={styles.cWcontent}>
			<Link className={styles.arrow_r} href="/guide/brm/intro/1">
				<Image src="/img/arrow.png" width={32} height={32} alt="arrow" />
			</Link>

			<div className={styles.guide_content}>
				<div className={styles.r_space}>
					<div className={styles.head_page}>
						<Tab>
							<h2>Введение</h2>
						</Tab>
						<Tab>
							<Menu />
						</Tab>
					</div>
					<div className={styles.line_1}></div>

					<div className={styles.line_2}>
						<TabCore>
							<div className={styles.into_content}>
								<p>
									Хмелевар - крайне мобильный танк, который сочетает в себе
									пассивное уменьшение входящего урона, мощную коллекцию
									атакующих и защитных способностей. За годы, прошедшие с
									момента их появления в Mists of Pandaria, хмелевар неизменно
									остается одним из лучших танков в игре, и, обычно, он очень
									хорошо показывает себя в рейдах самых высоких уровней.
									Поговорим о самом главном и самом непонятном в хмелеваре, о
									том что делает хмелевара именно таким, какой он есть -
									<a href="https://ru.wowhead.com/spell=115069/"></a>. Это
									одновременно и дар и проклятье хмелевара, т.к. оно дает
									возможность переживать огромное количество единоразового
									урона, но при продолжительном высоком входящем уроне само же
									вас убьет. <a href="https://ru.wowhead.com/spell=115069/"></a>
									откладывает основную часть получаемого урона в уникальный
									эффект пошатывания, который в дальнейшем можно снять другими
									вашими способностями. Механика откладывания урона в эффект
									пошатывания или полное уклонение от него, делает хмелевара
									всегда желанным танком в рейдах любой сложности и эпохальных
									подземельях. Кроме того, хмелевар обладает высокой полезностью
									для рейда, во-первых, благодаря уникальному эффекту монаха
									<a href="https://ru.wowhead.com/spell=8647"></a>, а во-вторых,
									за счёт невероятной мобильности. Слабой стороной Хмелевара
									являются невысокие показатели самоисцеления и низкий объем
									здоровья. Однако,
									<a href="https://ru.wowhead.com/spell=216519"></a> несколько
									компенсирует это в совместных активностях, где обычно на вас
									накладываются исцеляющие эффекты (хоты) от лекарей.
								</p>
								<img
									className={styles.img_panda}
									src="/img/barrel.png"
									alt=""
								/>
							</div>
						</TabCore>
					</div>

					<div className={styles.line_3}>
						<Tab>
							<div>
								<p>
									<green>СИЛЬНЫЕ СТОРОНЫ:</green>
								</p>
								<p>
									<img className={styles.img_plus} src="/img/add.png" alt="" />
									Пошатывание, Скрытые резервы, Очищающий отвар и Божественный
									отвар дают возможность выдерживать огромное количество урона.
									Кроме того, гарантируют плавное получение урона без резких
									скачков здоровья;
								</p>
								<p>
									<img className={styles.img_plus} src="/img/add.png" alt="" />
									Небесная удача дает преимущество в исцелении перед другими
									танками;
								</p>
								<p>
									<img className={styles.img_plus} src="/img/add.png" alt="" />
									Тигриное рвение, Кувырок и Трансцендентность дают невероятную
									мобильность, в сравнении с другими танками;
								</p>
								<p>
									<img className={styles.img_plus} src="/img/add.png" alt="" />
									Множество способностей для позиционирования противников, таких
									как: Столкновение, Призыв статуи Черного Быка и Круг мира;
								</p>
								<p>
									<img className={styles.img_plus} src="/img/add.png" alt="" />
									Способности для контроля противников, такие как: Круговой удар
									ногой и Паралич;
								</p>
								<p>
									<img className={styles.img_plus} src="/img/add.png" alt="" />
									Уникальные ауры, которые действуют на союзников: Близко к сердцу, Щедрая доля и Стремительность;
								</p>
								
								<p>
									<img className={styles.img_plus} src="/img/add.png" alt="" />
									Бурстовый урон. У хмелеваров теперь есть большое количество атакующих способностей и они невероятно хороши в нанесении бурстового АоЕ-урона;
								</p>
							</div>
						</Tab>
						<Tab>
							<p>
								<red>СЛАБЫЕ СТОРОНЫ:</red>
							</p>
							<p>
								<img className={styles.img_minus} src="/img/minus.png" alt="" />
								Количество здоровья. Хмелевары имеют здоровье, сравнимое со
								здоровьем некоторых дпс классов. Это делает его уязвимым к
								продолжительному урону от магии и постоянному урону от дебафов;
							</p>
							<p>
								<img className={styles.img_minus} src="/img/minus.png" alt="" />
								Низкое самоисцеление. Дар быка и Устранение вреда призваны это
								исправить, но этого не всегда хватает;
							</p>
							<p>
								<img className={styles.img_minus} src="/img/minus.png" alt="" />
								Требование к большому количеству привязки горячих клавиш
								(биндов), которые необходимо отслеживать;
							</p>
							<p>
								<img className={styles.img_minus} src="/img/minus.png" alt="" />
								Может потребоваться установить дополнительные аддоны или
								WeakAura для отслеживания эффекта Пошатывание;
							</p>
						</Tab>
					</div>
				</div>

				<div className={styles.l_space}>
					<Tab>
						<p>
							Lorrgs – удобный сайт для быстрого анализа бурстов и кулдаунов на
							боссах. Он позволяет посмотреть первые топ 50 логов на любом боссе
							и увидеть таймеры использования основных бурстов определенной
							специализации.
						</p>
					</Tab>
					<Tab>
						<p>
							RaidBots – cпециальная утилита для оптимизации вашего персонажа.
							Позволяет сравнить ваше снаряжение и многое другое для повышения
							вашего урона, основываясь на симуляции боев с одной или
							несколькими целями.
						</p>
					</Tab>
					<Tab>
						<p>
							Subcreation – быстро посмотреть статистику по экипировке, талантам
							и всему-всему как с ключей, так и с рейдов.
						</p>
					</Tab>
				</div>
			</div>
		</div>
	);
};

export default ContentIndex;