'use strict';

exports.__esModule = true;

var _fetch = require('fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _event = require('event');

var _event2 = _interopRequireDefault(_event);

var _PickerBase2 = require('./PickerBase');

var _PickerBase3 = _interopRequireDefault(_PickerBase2);

var _qs = require('qs');

var _tip = require('tip');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TicketCategoryPicker = function (_PickerBase) {
    _inherits(TicketCategoryPicker, _PickerBase);

    function TicketCategoryPicker(container, activityStatus) {
        _classCallCheck(this, TicketCategoryPicker);

        var _this = _possibleConstructorReturn(this, _PickerBase.call(this, container));

        _this.activityStatus = activityStatus;
        _this.$items = container.find('.items');
        _this.currentItem = null;
        return _this;
    }

    TicketCategoryPicker.prototype.fetchWithEvent = function fetchWithEvent(event) {
        var _this2 = this;

        (0, _fetch2['default'])({
            url: '/v1/ticketCategories',
            data: {
                shopId: _qs.query.shopId,
                b2c: window.isB2C,
                eventId: event.id
            }
        }).on('success', function (categories) {
            _this2.render(categories);
            _this2.show();
            _this2.initMore();
        });
    };

    TicketCategoryPicker.prototype.render = function render(categories) {
        var _this3 = this;

        var $items = this.$items;
        var matchedItem = null;
        $items.empty();
        categories.forEach(function (category) {
            var hasTicket = category.hasTicket;
            var status = _this3.activityStatus;
            var $li = $('<div class="item" data-id="' + category.id + '">' + category.specification + (hasTicket || status == 6 ? '' : ' €Û¿') + '</div>');

            if (status == 6) {
                $li.addClass('disabled');
            }

            if (!hasTicket) {
                $li.addClass('disabled');
            }

            if (category.desc) {
                $li.on('mouseenter', function () {
                    _tip2['default'].text(category.desc);
                    _tip2['default'].attachTo($li);
                }).on('mouseleave', function () {
                    _tip2['default'].hide();
                });
            }

            if (window.isB2C && hasTicket && _this3.activityStatus != 6) {
                if (category.needSpeedPackBuy) {
                    $li.append($('<div class="icon icon-qiang"></div>'));
                } else {
                    if (category.lowPrice < category.originPrice) {
                        $li.append($('<div class="icon icon-zhe"></div>'));
                    } else if (category.lowPrice > category.originPrice) {
                        $li.append($('<div class="icon icon-yi"></div>'));
                    }
                }
            }

            $li.on('click', function () {
                if (!hasTicket || _this3.activityStatus == 6) {
                    return;
                }
                if (_this3.currentItem) {
                    _this3.currentItem.removeClass('selected');
                }
                $li.addClass('selected');
                _this3.currentItem = $li;
                _this3.emit('pick', category);
            });
            if (!matchedItem && hasTicket) {
                matchedItem = $li;
            }
            if (category.priceLowest) {
                matchedItem = $li;
            }

            if (category.id === +_qs.query.ticketCategoryId) {
                matchedItem = $li;
            }
            $items.append($li);
        });

        this.currentItem = matchedItem;

        if (matchedItem && this.activityStatus != 6) {
            matchedItem.addClass('selected');
            matchedItem.trigger('click');
        } else {
            this.emit('noAvailable');
        }
    };

    return TicketCategoryPicker;
}(_PickerBase3['default']);

_event2['default'].mixin(TicketCategoryPicker);

exports['default'] = TicketCategoryPicker;


//////////////////
// WEBPACK FOOTER
// ./src/activity/widgets/ticketcategorypicker.js
// module id = 354
// module chunks = 8