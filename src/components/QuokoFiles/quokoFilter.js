/**
 * Enabled v-data-table to have moire than one filter.
 */
class MultiFilters {

  /**
   * Constructor.
   *
   * @param items
   * @param filters
   * @param filter
   * @param headers
   */
  constructor(items, filters, filter, headers) {
    this.items = items;
    this.filter = filter;
    this.headers = headers;
    this.filters = filters;
    this.filterCallbacks = {};
  }

  /**
   * Updates filter values.
   * @param filters filter´s object
   * @param val JSON chunk to be updated.
   * @returns {*}
   */
  static updateFilters (filters, val) {
    return Object.assign({}, filters, val);
  }

  /**
   * Adds a new filter
   * @param filterName The name of the filter from which the information will be extracted
   * @param filterCallback The callback that will apply the filter.
   */
  registerFilter (filterName, filterCallback) {
    this.filterCallbacks[filterName] = filterCallback;
  }

  /**
   * Run all filters.
   * @returns {*}
   */
  runFilters () {
    const self = this;
    let filteredItems = self.items;

    Object.entries(this.filterCallbacks)
      .forEach(([entity, cb]) => {
        filteredItems = cb.call(self, self.filters[entity], filteredItems);
      });

    return filteredItems;
  }

}



function customFilter (items, filters, filter, headers) {
  // Init the filter class.
  const cf = new MultiFilters(items, filters, filter, headers);

  cf.registerFilter('search', function (searchWord, items) {
    if (searchWord.trim() === '') return items;

    return items.filter(item => {
      return item.name.toLowerCase().includes(searchWord.toLowerCase());
    }, searchWord);

  });


  cf.registerFilter('added_by', function (added_by, items) {
    if (added_by.trim() === '') return items;

    return items.filter(item => {
      return item.added_by.toLowerCase() === added_by.toLowerCase();
    }, added_by);

  });

  // Its time to run all created filters.
  // Will be executed in the order thay were defined.
  return cf.runFilters();
}


/**
 * Handler when user input something at the "Filter" text field.
 */
function filterSearch (val) {
  this.filters = this.MultiFilters.updateFilters(this.filters, { search: val });
  console.log(this.filters)
}

/**
 * Handler when user  select some author at the "Author" select.
 */


function filterAuthor (val) {
  filters = MultiFilters.updateFilters(this.filters, { added_by: val });
}

rows = [
  {
    name: 'Marcelo Tosco',
    added_by: 'admin'
  },
  {
    name: 'Carlos Campos',
    added_by: 'admin'
  },
  {
    name: 'Luis Gonzalez',
    added_by: 'Editor'
  },
  {
    name: 'Keopx',
    added_by: 'Editor'
  },
  {
    name: 'Marco Marocchi',
    added_by: 'Admin'
  },

]

filters = {
  search: '',
  added_by: '',
},

  authors = ['Admin', 'Editor'],
  headers = [
    {
      text: 'Names',
      align: 'left',
      value: 'name',
      sortable: false
    },
    {
      text: 'Item added by',
      value: 'added_by',
      align: 'left',
      sortable: false
    }
  ]

filters //?



let val = "Carlo"

filterAuthor(val)

let result = customFilter(rows, filters, val, headers) //?
result
