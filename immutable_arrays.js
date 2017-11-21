// immutable arrays

clone = x => [...x]
push = y => x => [...x, y]
pop = x => x.slice(0, -1)
unshift = y => x => [y, ...x]
shift = x => x.slice(1)
sort = f => x => [...x].sort(f)
delete = i => x => [...x.slice(0,i), ...x.slice(i+1)]
splice = (s, c, ...y) => x => [...x.slice(0, s), ...y, ...x.slice(s+c)]