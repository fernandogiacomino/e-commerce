/** @odoo-module **/
import publicWidget from '@web/legacy/js/public/public_widget';

publicWidget.registry.BrandSnippet = publicWidget.Widget.extend({
    selector: '.s_brand_grid',
    start() {
        this._applyGridLayout();
        this._toggleSearchForm();
    },
    _applyGridLayout() {
        const columns = parseInt(this.$el.data('brand-columns')) || 4;
        const columnClass = `col-md-${Math.floor(12 / columns)}`;
        this.$el.find('.brand-grid .brand_item').each(function () {
            $(this).removeClass(function (_, cls) {
                return (cls.match(/(^|\s)col-\S+/g) || []).join(' ');
            });
            $(this).addClass(columnClass);
        });
    },
    _toggleSearchForm() {
        const showSearch = this.$el.data('brand-search');
        if (showSearch === false || showSearch === 'false') {
            this.$el.find('.brand-search-form').hide();
        }
    }
});