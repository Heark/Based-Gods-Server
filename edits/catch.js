	catch: function (room, user){
	if (sys.catch == true) return;
	this.addModCommand("" + user.name + " caught a " +pokemon+ "." ));	
	else 
		return this.sendReply("Sorry, /catch is turned off.")
	},
	catchoff: function (room, user) {
	  if  (sys.catch == false) return;
	  this.sendReply("Um, /catch is already off. Awkward...")
	  else 
		return this.addModCommand("" + user.name + " turned off /catch." ));
		sys.catch == false;
	},
       attack: function (target, room, user){
       		target = this.splitTarget(target, true);
		var targetUser = this.targetUser;
		var name = this.targetUsername;
		var userid = toId(name);
       }
