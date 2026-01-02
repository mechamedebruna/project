'use strict';
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[48596],
	{
		34056: (e, s, _) => {
			_.r(s), _.d(s, { IconMedal: () => t, default: () => A });
			var a,
				c = _(73620),
				l = _(96540),
				d = _(46942),
				i = _.n(d),
				n = _(50162);
			const o = _(65363).iconList.IconMedal,
				t = e => {
					let { className: s = '' } = e;
					return (0, c.A)(
						'div',
						{ className: i()('ui-pdp-icon ui-pdp-icon--medal', s) },
						void 0,
						a || (a = (0, c.A)(n.Image, { src: 'images/medal.svg', alt: '' })),
					);
				};
			t.ICON_ID = o;
			const A = (0, l.memo)(t);
		},
	},
]);
//# sourceMappingURL=medal.3b4adf6b.js.map
