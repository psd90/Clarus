import Route from '@ember/routing/route';

export default class FilmRoute extends Route {
  model(params) {
    const { film_id } = params;
    return film_id;
  }
}
