//Botones del nav, para navegar a las secciones de la página.

//const btnLogo = document.getElementById('btn-logo');
const btnHome = document.getElementById('btn-home');
const btnAbout = document.getElementById('btn-about');
const btnContact = document.getElementById('btn-contact');

const showedMain = document.getElementById('showedMain');
const footer = document.getElementsByTagName('footer');

//Eventos para cambiar de sección de la página. (Home, About y Contact)

let homePage = true;
let aboutPage = false;
let contactPage = false;

//Modificar eventos para borrar el contenido del main.innerHTML y escribir el nuevo código para la sección seleccionada.

function showHome() {
	switch (homePage) {
		case true:
			break;
		default:
			homePage = true;
			aboutPage = false;
			contactPage = false;
			btnHome.classList.add('nav-link-showed');
			btnAbout.classList.remove('nav-link-showed');
			btnContact.classList.remove('nav-link-showed');
			showedMain.innerHTML = '';
			showedMain.innerHTML =
				`<!-- Short summary -->
				<section class="d-flex flex-column justify-content-center justify-content-lg-start py-4 py-lg-5 ps-lg-4">
					<!-- Name -->
					<article class="d-block container text-center text-lg-start col-lg-6 mb-1 ms-lg-4">
						<h1 class="text-light title text_shadow">
							FULLSTACK
							<span class="d-block d-lg-inline cyan text_shadow">JAVASCRIPT</span>
						</h1>
					</article>
					<!-- Short bio -->
					<article
						class="d-flex container justify-content-center justify-content-lg-start text-center text-lg-start ms-lg-4">
						<div class="text-light col-7 col-sm-6 col-md-5 col-lg-4 me">
							<p class="fs-5 m-0">Daniel Ordóñez</p>
							<p class="fs-6 m-0">from Zulia, Venezuela</p>
						</div>
					</article>
				</section>
				<div class="divider"></div>
				<!-- Body -->
				<section class="bg-black">
					<!-- Short description -->
					<article class="d-flex justify-content-center text-center py-4">
						<div id="qualities" class="carousel slide container-fluid fw-bolder" data-bs-ride="carousel">
							<div class="carousel-inner text-light">
								<div class="carousel-item purple active">IMAGINATION = CODE</div>
								<div class="carousel-item cyan">ORDER IS A MUST</div>
								<div class="carousel-item purple">LEARN EVERYTHING</div>
								<div class="carousel-item cyan">IMPROVE IN ALL</div>
								<div class="carousel-item purple">ALWAYS FOCUSED</div>
								<div class="carousel-item cyan">PERFECTION</div>
							</div>
						</div>
					</article>
				</section>
				<div class="divider2"></div>
				<section class="d-flex flex-column flex-lg-row container-fluid py-5">
					<article class="d-flex flex-wrap justify-content-center align-content-start col-lg-6">
						<div class="subtitle col-12 text-center text-light fw-bolder mb-4">SKILLS</div>
						<table class="table">
							<tr class="d-flex container justify-content-center">
								<th class="bg-dark text-light border-0 col-3 col-sm-2">
									<div
										class="d-flex align-items-center justify-content-center rounded skill-container html_color box_shadow-0 fw-bolder">
										HTML
									</div>
								</th>
								<th class="bg-dark text-light border-0 col-3 col-sm-2">
									<div
										class="d-flex align-items-center justify-content-center rounded skill-container css_color box_shadow-0 fw-bolder">
										CSS
									</div>
								</th>
								<th class="bg-dark text-light border-0 col-5 col-sm-4 col-md-3 col-lg-4 col-xl-3">
									<div
										class="d-flex align-items-center justify-content-center rounded skill-container bs_color box_shadow-0 fw-bolder">
										BOOTSTRAP
									</div>
								</th>
							</tr>
							<tr class="d-flex container justify-content-center text-light">
								<th class="bg-dark border-0 col-5 col-sm-4 col-md-3 col-lg-4 col-xl-3">
									<div
										class="d-flex align-items-center justify-content-center rounded skill-container js_color box_shadow-0 fw-bolder text-black fw-bolder">
										JAVASCRIPT
									</div>
								</th>
								<th class="bg-dark border-0 col-3 col-sm-2">
									<div
										class="d-flex align-items-center justify-content-center rounded skill-container git_color box_shadow-0 fw-bolder text-light fw-bolder">
										GIT
									</div>
								</th>
								<th class="bg-dark border-0 col-4 col-sm-3">
									<div
										class="d-flex align-items-center justify-content-center rounded skill-container bg-black box_shadow-0 fw-bolder text-light fw-bolder">
										GITHUB
									</div>
								</th>
							</tr>
							<tr class="d-flex container justify-content-center text-light">
								<th class="bg-dark border-0 col-3 col-sm-2">
									<div
										class="d-flex align-items-center justify-content-center rounded skill-container bg-primary box_shadow-0 fw-bolder text-black fw-bolder">
										-----
									</div>
								</th>
								<th class="bg-dark border-0 col-5 col-sm-4 col-md-3 col-lg-4 col-xl-3">
									<div
										class="d-flex align-items-center justify-content-center rounded skill-container bg-success box_shadow-0 fw-bolder text-light fw-bolder">
										-----
									</div>
								</th>
								<th class="bg-dark border-0 col-3 col-sm-2">
									<div
										class="d-flex align-items-center justify-content-center rounded skill-container bg-warning box_shadow-0 fw-bolder text-light fw-bolder">
										-----
									</div>
								</th>
							</tr>
							<tr class="d-flex container justify-content-center text-light">
								<th class="bg-dark border-0 col-5 col-sm-4 col-md-3 col-lg-4 col-xl-3">
									<div
										class="d-flex align-items-center justify-content-center rounded skill-container bg-info box_shadow-0 fw-bolder text-black fw-bolder">
										-----
									</div>
								</th>
								<th class="bg-dark border-0 col-5 col-sm-4 col-md-3 col-lg-4 col-xl-3">
									<div
										class="d-flex align-items-center justify-content-center rounded skill-container bg-secondary box_shadow-0 fw-bolder text-light fw-bolder">
										-----
									</div>
								</th>
								<th class="bg-dark border-0 col-3 col-sm-2">
									<div
										class="d-flex align-items-center justify-content-center rounded skill-container bg-danger box_shadow-0 fw-bolder text-light fw-bolder">
										-----
									</div>
								</th>
							</tr>
						</table>
					</article>
					<!-- Image -->
					<article class="pt-5 pt-lg-0">
						<div class="container col-9 col-sm-7 col-md-6 col-lg-8 col-xxl-7">
							<img src="./assets/img/coding2.webp" alt="Developer conding" class="img-fluid" />
						</div>
					</article>
				</section>
				<section class="mb-5">
					<article>
						<div class="subtitle col-12 text-center text-light fw-bolder mt-3 mb-4 mb-lg-5">PROJECTS</div>
						<div class="container d-flex flex-column flex-lg-row align-items-center justify-content-center">
							<div class="card bg-purple box_shadow-1 col-10 col-sm-9 col-lg-5 mb-3 mb-lg-0 mx-lg-5">
								<a href="#" class="link-light link-underline-opacity-0">
									<img src="./assets/img/NimrodelPubRestaurant.png" class="card-img-top img-fluid" alt="Prueba">
									<div class="card-body text-light text-center fw-bolder">
										<div class="card_title-size mb-0">Nimrodel Pub Restaurant</div>
									</div>
								</a>
							</div>
							<div class="card bg-cyan box_shadow-1 col-10 col-sm-9 col-lg-5 my-3 my-lg-0 mx-lg-5">
								<a href="#" class="project-element link-light link-underline-opacity-0">
									<img src="./assets/img/PetsWithYou!.png" class="card-img-top img-fluid" alt="Prueba" />
									<div class="card-body text-light text-center fw-bolder">
										<div class="card_title-size mb-0">Pets With You!</div>
									</div>
								</a>
							</div>
						</div>
					</article>
				</section>`;
			break;
	}
}

function showAbout() {
	switch (aboutPage) {
		case true:
			break;
		default:
			homePage = false;
			aboutPage = true;
			contactPage = false;
			btnHome.classList.remove('nav-link-showed');
			btnAbout.classList.add('nav-link-showed');
			btnContact.classList.remove('nav-link-showed');
			showedMain.innerHTML = '';
			showedMain.innerHTML =
			`<section class="d-flex flex-column flex-xl-row mb-3 mb-lg-5">
				<article class="container px-4 my-4 my-md-5 text-center align-self-center">
					<img src="./assets/img/Dany.jpg" alt="Daniel Ordóñez" class="rounded-4 col-5 col-sm-4 col-md-3 col-lg-4 col-xl-9">
				</article>
				<article class="container d-flex flex-column justify-content-center align-items-center align-items-xl-start text-center">
					<div class="col-10 text-center text-lg-start mt-3 mt-md-1 mb-3">
						<h1 class="about-title cyan text_shadow mb-0">ABOUT</h1>
						<hr class="title-separator container-fluid cyan mt-2 mt-md-4">
					</div>
					<div class="about-p text-light col-10 text-start">
						<p class="mb-3">I'm Daniel Ordóñez. I'm 26 years old, and I make websites. I live in Maracaibo, Venezuela.</p>
						<p class="d-none "> Soy desarrollador de páginas web FullStack en JavaScript. Utilizo el apodo KingHusband en mis redes sociales, apodo que tomé de la manera afectuosa en la que me llama mi esposa. Soy promovedor del amor y cuidado de la familia. Me apasiona crear cosas, y más cuando puedo satisfacer una necesidad con ello. También me apasionan los videojuegos. Siempre estoy abierto e interesado a aprender más cosas sobre tecnología, código y habilidades blandas.</p>
						<p class="">I'm a FullStack JavaScript web designer. I use KingHusband as a nickname across social media. Nickname I decided to use because that's how my wife call me in spanish. I'm promoter of love and care of the family. I love to create things. More when I can satisfy a need with it. I also like videogames. I'm always open and interested in learning more about technology, code and soft skills. I like to be orderly, and try my best in all the things I do.</p>
					</div>
				</article>
			</section>`;
			break;
	}
}

function showContact() {
	switch (contactPage) {
		case true:
			break;
		default:
			homePage = false;
			aboutPage = false;
			contactPage = true;
			btnHome.classList.remove('nav-link-showed');
			btnAbout.classList.remove('nav-link-showed');
			btnContact.classList.add('nav-link-showed');
			showedMain.innerHTML = '';
			showedMain.innerHTML =
			`<section class="">
				<article>
					<div class="d-flex flex-column align-items-center">
						<div class="col-10 col-sm-9 col-md-8 col-lg-7 col-xl-6 mt-4 mt-lg-5">
							<form class="d-flex flex-column text-light">
								<h3 class="text-white text-center fw-semibold mb-4">
									If you want to get in contact with me ...
								</h3>
								<div class="mb-3">
									<label for="contact_form-name" class="form-label cyan">Your name</label>
									<input type="text" class="contact_form-input col-12" id="contact_form-name" autocomplete="off">
								</div>
								<div class="mb-3">
									<label for="contact_form-email" class="form-label cyan">Your email</label>
									<input type="email" class="contact_form-input col-12" id="contact_form-email" autocomplete="off">
								</div>
								<div class="mb-3 col-12">
									<label for="contact_form-msg" class="form-label cyan">Your message for me ...</label>
									<textarea name="" id="contact_form-msg" class="contact_form-input col-12" cols="0" rows="5" value=" ">									</textarea>
								</div>
								<button type="submit" class="btn bg-purple text-white align-self-center">Submit</button>
							</form>
						</div>
						<div class="col-12 py-4 mt-4 mt-lg-5 bg-cyan">
							<h3 class="text-white text-center fw-semibold m-0">
								Available for select freelance opportunities
							</h3>
						</div>
					</div>
				</article>
			</section>`;
			const contactFormMsg = document.getElementById('contact_form-msg');
			contactFormMsg.value = "";
			break;
	}
}

btnHome.addEventListener('click', showHome);
btnAbout.addEventListener('click', showAbout);
btnContact.addEventListener('click', showContact);