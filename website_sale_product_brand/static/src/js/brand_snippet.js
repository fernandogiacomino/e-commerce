odoo.define('website_sale_product_brand.brand_snippet', function (require) {
    const publicWidget = require('web.public.widget');

    publicWidget.registry.BrandSnippet = publicWidget.Widget.extend({
        selector: '.s_brand_grid',
        start: function () {
            this._applyGridLayout();
            this._toggleSearchForm();
        },

        _applyGridLayout: function () {
            const columns = parseInt(this.$el.data('brand-columns')) || 4;
            const columnClass = `col-md-${Math.floor(12 / columns)}`;
            this.$el.find('.brand-grid .brand_item').each(function () {
                // Remove previous col-* classes if any
                $(this).removeClass(function (index, className) {
                    return (className.match(/(^|\s)col-\S+/g) || []).join(' ');
                });
                $(this).addClass(columnClass);
            });
        },

        _toggleSearchForm: function () {
            const showSearch = this.$el.data('brand-search');
            if (showSearch === false || showSearch === 'false') {
                this.$el.find('.brand-search-form').hide();
            }
        }
    });
});