Pokedex.RootView.prototype.reassignToy = function (event) {
  var $option = $(event.currentTarget);
  var oldPoke = this.pokes.get($option.data('pokemon-id'));
  var toy = oldPoke.toys().get($option.data('toy-id'));
  toy.set('pokemon_id', $option.val());
  var rootView = this;
  toy.save({}, {
    success: function(resp) {
      oldPoke.toys().remove(toy);
      rootView.renderToysList(oldPoke.toys());
      rootView.$toyDetail.empty();
    }
  });
};

Pokedex.RootView.prototype.renderToysList = function (toys) {
  var rootView = this;
  this.$pokeDetail.find(".toys").empty();
  toys.each(function (toy) {
    rootView.addToyToList(toy);
  });
};
