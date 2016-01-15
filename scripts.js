$(function () {
  $("#start-btn").click(function(){
    $(".test-contain").show();
	$(".answer").hide();
  });
});
$(function(){
  $("#submit").click(function(event){
    var accommodation = $("select#accommodations").val();
	var activity = $("select#activities").val();
	var transportation = $("select#transportation").val();
	var season = $("select#season").val();

	if (accommodation === "cottage") {
		if (activity === "local") {
			if (transportation === "walking" || transportation === "transit") {
				if (season === "spring" || season === "summer") {
					$(".france").show();
					$(".test-contain").hide();
				} else {
					$(".japan").show();
					$(".test-contain").hide();
				}
			} else {
				if (season === "spring" || season === "summer") {
					$(".france").show();
					$(".test-contain").hide();
				} else {
					$(".japan").show();
					$(".test-contain").hide();
				}
			}
		} else if (activity === "pampered") {
			if (transportation === "walking" || transportation === "transit") {
				if (season === "spring" || season === "summer") {
					$(".mexico").show();
					$(".test-contain").hide();
				} else {
					$(".aspen").show();
					$(".test-contain").hide();
				}
			} else {
				$(".aspen").show();
				$(".test-contain").hide();
			}
		} else if (activity === "park") {
			if (transportation === "walking" || transportation === "transit") {
				if (season === "spring" || season === "summer") {
					$(".mexico").show();
					$(".test-contain").hide();
				} else {
					$(".aspen").show();
					$(".test-contain").hide();
				}
			} else {
				$(".aspen").show();
				$(".test-contain").hide();
			}
		} else {
			$(".kenya").show();
			$(".test-contain").hide();
		}
	} else if (accommodation === "resort") {
		if (activity === "local") {
			if (transportation === "walking" || transportation === "transit") {
				if (season === "spring" || season === "summer") {
					$(".mexico").show();
					$(".test-contain").hide();
				} else {
					$(".france").show();
					$(".test-contain").hide();
				}
			} else {
				if (season === "spring" || season === "summer") {
					$(".mexico").show();
					$(".test-contain").hide();
				} else {
					$(".aspen").show();
					$(".test-contain").hide();
				}
			}
		} else if (activity === "pampered") {
			if (transportation === "walking" || transportation === "transit") {
				if (season === "spring" || season === "summer") {
					$(".mexico").show();
					$(".test-contain").hide();
				} else {
					$(".aspen").show();
					$(".test-contain").hide();
				}
			} else {
				$(".aspen").show();
				$(".test-contain").hide();
			}
		} else if (activity === "park") {
			if (transportation === "walking" || transportation === "transit") {
				if (season === "spring" || season === "summer") {
					$(".japan").show();
					$(".test-contain").hide();
				} else {
					$(".france").show();
					$(".test-contain").hide();
				}
			} else {
				$(".aspen").show();
				$(".test-contain").hide();
			}
		} else {
			if (season === "winter" || season === "fall") {
				$(".aspen").show();
				$(".test-contain").hide();
			} else {
				$(".france").show();
				$(".test-contain").hide();
			}
		}
	} else if (accommodation === "cabin") {
		if (activity === "local") {
			if (transportation === "walking" || transportation === "transit") {
				if (season === "spring" || season === "summer") {
					$(".kenya").show();
					$(".test-contain").hide();
				} else {
					$(".aspen").show();
					$(".test-contain").hide();
				}
			} else {
				if (season === "spring" || season === "summer") {
					$(".france").show();
					$(".test-contain").hide();
				} else {
					$(".aspen").show();
					$(".test-contain").hide();
				}
			}
		} else if (activity === "pampered") {
			if (transportation === "walking" || transportation === "transit") {
				if (season === "spring" || season === "summer") {
					$(".france").show();
					$(".test-contain").hide();
				} else {
					$(".aspen").show();
					$(".test-contain").hide();
				}
			} else {
				$(".aspen").show();
				$(".test-contain").hide();
			}
		} else if (activity === "park") {
			if (transportation === "walking" || transportation === "transit") {
				if (season === "spring" || season === "summer") {
					$(".japan").show();
					$(".test-contain").hide();
				} else {
					$(".france").show();
					$(".test-contain").hide();
				}
			} else {
				$(".aspen").show();
				$(".test-contain").hide();
			}
		} else {
			if (season === "winter" || season === "fall") {
				$(".aspen").show();
				$(".test-contain").hide();
			} else {
				$(".kenya").show();
				$(".test-contain").hide();
			}
		}
	} else {
		if (activity === "local") {
			if (transportation === "walking" || transportation === "transit") {
				if (season === "spring" || season === "summer") {
					$(".kenya").show();
					$(".test-contain").hide();
				} else {
					$(".aspen").show();
					$(".test-contain").hide();
				}
			} else {
				if (season === "spring" || season === "summer") {
					$(".france").show();
					$(".test-contain").hide();
				} else {
					$(".japan").show();
					$(".test-contain").hide();
				}
			}
		} else if (activity === "pampered") {
			if (transportation === "walking" || transportation === "transit") {
				if (season === "spring" || season === "summer") {
					$(".france").show();
					$(".test-contain").hide();
				} else {
					$(".aspen").show();
					$(".test-contain").hide();
				}
			} else {
				$(".aspen").show();
				$(".test-contain").hide();
			}
		} else if (activity === "park") {
			if (transportation === "walking" || transportation === "transit") {
				if (season === "spring" || season === "summer") {
					$(".japan").show();
					$(".test-contain").hide();
				} else {
					$(".france").show();
					$(".test-contain").hide();
				}
			} else {
				$(".aspen").show();
				$(".test-contain").hide();
			}
		} else {
			if (season === "winter" || season === "fall") {
				$(".aspen").show();
				$(".test-contain").hide();
			} else {
				$(".kenya").show();
				$(".test-contain").hide();
			}
		}
	}
	
	event.preventDefault();
	});
});

